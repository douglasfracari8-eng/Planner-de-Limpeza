
import React from 'react';
import { PageData, ChecklistSection, Hack, MasterListSection, CalendarData, ScheduleSection, DeclutterGridRow, SuppliesSection, MaintenanceSection } from '../types';
import { PLANNER_DATA, PLANNER_COLORS } from '../constants';
import PageContainer from './PageContainer';
import { getIcon, PersonIcon, ThankYouIcon } from './Icons';

export const PageHeader: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="text-center mb-2">
    <h1 className="text-3xl md:text-4xl font-bold rainbow-text font-fredoka uppercase tracking-wide">{title}</h1>
    {subtitle && <h2 className="text-base md:text-lg text-gray-500 font-fredoka mt-1 uppercase">{subtitle}</h2>}
  </div>
);

export const CoverPage: React.FC<{ page: PageData }> = ({ page }) => (
    <PageContainer>
      <div className="flex flex-col items-center justify-center h-full text-center p-4">
          <div 
            className="w-full max-w-2xl bg-white bg-opacity-70 backdrop-blur-sm p-8 rounded-lg"
            style={{
                border: '2px solid transparent',
                borderImage: 'linear-gradient(to right, #fecaca, #fed7aa, #fef08a, #d9f99d, #a5b4fc, #d8b4fe) 1',
                boxShadow: '0 0 20px rgba(0,0,0,0.05)'
              }}
          >
              <div className="py-4" style={{ borderTop: '4px solid', borderBottom: '4px solid', borderImage: 'linear-gradient(to right, #fecaca, #d8b4fe) 1' }}>
                  <h1 className="text-4xl md:text-5xl font-bold rainbow-text font-fredoka uppercase tracking-wider">{page.title}</h1>
                  <h2 className="text-xl md:text-2xl text-gray-600 font-fredoka mt-4 uppercase">{page.subtitle}</h2>
              </div>
          </div>
      </div>
    </PageContainer>
);

export const HacksPage: React.FC<{ page: PageData }> = ({ page }) => {
  const hacks = page.content as Hack[];
  
  const borderColors = ['border-red-300', 'border-orange-300', 'border-yellow-300', 'border-green-300', 'border-blue-300', 'border-purple-300', 'border-pink-300', 'border-indigo-300', 'border-teal-300', 'border-lime-300'];
  const iconBgColors = ['bg-red-100', 'bg-orange-100', 'bg-yellow-100', 'bg-green-100', 'bg-blue-100', 'bg-purple-100', 'bg-pink-100', 'bg-indigo-100', 'bg-teal-100', 'bg-lime-100'];

  return (
    <PageContainer>
      <PageHeader title={page.title} subtitle={page.subtitle} />
      <div className="space-y-1 text-sm">
        {hacks.map((hack, index) => {
          const Icon = getIcon(hack.icon);
          const borderColorClass = borderColors[index % borderColors.length];
          const iconBgColorClass = iconBgColors[index % iconBgColors.length];
          
          return (
            <div key={hack.id} className={`flex items-start p-2 rounded-lg bg-white border-l-4 ${borderColorClass}`}>
              <div className="flex-shrink-0 flex items-center justify-center w-12 text-left">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${iconBgColorClass}`}>
                    {Icon && <Icon className={`w-6 h-6 text-gray-600`} />}
                  </div>
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-gray-800">{`${hack.id} ${hack.title}`}</h3>
                <p className="text-gray-600 text-xs">{hack.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </PageContainer>
  );
};

export const ChecklistPage: React.FC<{ page: PageData }> = ({ page }) => {
  const sections = page.content as ChecklistSection[];
  let taskCounter = 0;

  return (
    <PageContainer>
      <PageHeader title={page.title} subtitle={page.subtitle} />
      <div className="space-y-2 text-sm flex flex-col flex-grow">
        <div className="flex-grow">
            {sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-2">
                <h3 className="text-base font-bold text-gray-700 uppercase mb-1 pb-1 border-b-2 border-gray-200">{section.title}</h3>
                <ul className="space-y-1">
                  {section.tasks.map((task, taskIndex) => {
                    const colorClass = PLANNER_COLORS[taskCounter % PLANNER_COLORS.length];
                    taskCounter++;
                    return (
                      <li key={taskIndex} className="flex items-center bg-gray-50 p-1 rounded-md transition hover:bg-gray-100">
                        <span className="flex-grow text-gray-700 text-xs">{task.text}</span>
                        <div className={`w-4 h-4 rounded-sm ${colorClass} ml-2 flex-shrink-0`}></div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
        </div>
        {(page.footer?.showNotes || page.footer?.showReward || page.footer?.tip) && (
          <div className="mt-auto pt-1 border-t border-gray-200 text-xs">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
               {page.footer.showNotes && (
                <>
                  <div className="bg-red-50 p-1 rounded">
                    <label className="block text-center text-xs font-bold text-red-500 uppercase mb-1">Item para Substituir</label>
                    <textarea rows={1} className="w-full bg-white border-red-200 rounded-md shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50 text-xs"></textarea>
                  </div>
                  <div className="bg-orange-50 p-1 rounded">
                    <label className="block text-center text-xs font-bold text-orange-500 uppercase mb-1">Revisão da Limpeza</label>
                    <textarea rows={1} className="w-full bg-white border-orange-200 rounded-md shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50 text-xs"></textarea>
                  </div>
                  <div className="bg-blue-50 p-1 rounded">
                    <label className="block text-center text-xs font-bold text-blue-500 uppercase mb-1">Nota/Lembrete</label>
                    <textarea rows={1} className="w-full bg-white border-blue-200 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-xs"></textarea>
                  </div>
                </>
              )}
               {page.footer.showReward && (
                <div className="col-span-1 md:col-span-3 mt-1">
                  <label className="block text-xs font-bold text-red-500 uppercase">Recompense-se:</label>
                  <input className="mt-1 block w-full bg-red-50 border-red-200 rounded-md shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50 text-xs" type="text" />
                </div>
              )}
            </div>
             {page.footer.tip && (
              <p className="text-center font-bold text-gray-600 mt-2 font-fredoka uppercase text-xs">{page.footer.tip}</p>
            )}
          </div>
        )}
      </div>
    </PageContainer>
  );
};

export const MasterListPage: React.FC<{ page: PageData }> = ({ page }) => {
  const sections = page.content as MasterListSection[];
  return (
    <PageContainer>
      <PageHeader title={page.title} subtitle={page.subtitle} />
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-2">
          <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">{section.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
            {section.columns.map((col, colIndex) => {
               const colorClass = PLANNER_COLORS[colIndex % PLANNER_COLORS.length];
              return (
              <div key={colIndex} className={`p-2 rounded-lg bg-white text-xs`}>
                <h4 className={`text-sm font-bold uppercase text-gray-700 mb-1 pb-1 border-b-2 ${colorClass.replace('bg-','border-')}`}>{col.title}</h4>
                <ul>
                  {col.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center py-0.5 border-b border-gray-100">
                      <span className="text-gray-400 mr-2 text-xs">{itemIndex + 1}</span>
                      <span className="flex-1 text-gray-700">{item}</span>
                       <div className={`w-3 h-3 rounded-sm ${colorClass} ml-2 flex-shrink-0`}></div>
                    </li>
                  ))}
                </ul>
              </div>
            )})}
          </div>
        </div>
      ))}
    </PageContainer>
  );
};

export const CleaningLogPage: React.FC<{ page: PageData }> = ({ page }) => {
  const numRows = 15;
  return (
    <PageContainer>
      <PageHeader title={page.title} subtitle={page.subtitle} />
      <div className="overflow-x-auto text-xs flex-grow">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-orange-200 text-orange-800 uppercase">
              <th className="p-2 border border-orange-300">Data</th>
              <th className="p-2 border border-orange-300">Hora</th>
              <th className="p-2 border border-orange-300">Local/Área Limpa</th>
              <th className="p-2 border border-orange-300">
                <div className="flex items-center justify-center gap-1">
                  <PersonIcon className="w-4 h-4" />
                  <span>Limpo por</span>
                </div>
              </th>
              <th className="p-2 border border-orange-300">Notas</th>
              <th className="p-1 border border-orange-300 w-10">✓</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: numRows }).map((_, i) => (
              <tr key={i} className="bg-white">
                <td className="p-1 border border-gray-200"></td>
                <td className="p-1 border border-gray-200"></td>
                <td className="p-1 border border-gray-200"></td>
                <td className="p-1 border border-gray-200"></td>
                <td className="p-1 border border-gray-200"></td>
                <td className="p-1 border border-gray-200 text-center"><div className={`w-4 h-4 rounded-sm ${PLANNER_COLORS[i % PLANNER_COLORS.length]} mx-auto`}></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-1 grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
        <div>
          <h4 className="font-bold text-green-700 bg-green-200 p-1 rounded-t-md text-center text-xs">ITEM PARA SUBSTITUIR</h4>
          <div className="border border-green-200 rounded-b-md">
            {Array.from({length: 3}).map((_, i) => (
              <div key={i} className="flex items-center border-b border-green-200 last:border-b-0">
                <span className="p-1 bg-green-100 text-green-800 font-bold text-xs">{i+1}</span>
                <div className="p-0.5 flex-1 h-5"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-md h-full p-1"></div>
      </div>
    </PageContainer>
  );
};

export const GoalsPage: React.FC<{ page: PageData }> = ({ page }) => {
  return (
    <PageContainer>
      <PageHeader title={page.title} subtitle={page.subtitle} />
      <div className="space-y-2 text-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-orange-200 rounded-md p-1 bg-orange-50">
          <div className="font-bold text-orange-700 bg-orange-200 p-2 rounded-md text-xs">MINHAS 3 PRINCIPAIS METAS DE LIMPEZA:</div>
          <div className="font-bold text-orange-700 bg-orange-200 p-2 rounded-md text-xs">POR QUE ESSAS METAS SÃO IMPORTANTES:</div>
          {Array.from({ length: 3 }).map((_, i) => (
            <React.Fragment key={i}>
              <div className="flex items-center bg-white p-1 border border-orange-100 rounded">
                <span className="font-bold mr-2">{i + 1}</span>
                <input type="text" className="w-full border-0 focus:ring-0 text-sm" />
              </div>
              <div className="bg-white p-1 border border-orange-100 rounded">
                 <input type="text" className="w-full border-0 focus:ring-0 text-sm" />
              </div>
            </React.Fragment>
          ))}
        </div>

        <div className="border border-yellow-200 rounded-md p-1 bg-yellow-50">
            <h4 className="font-bold text-yellow-700 bg-yellow-200 p-2 rounded-md text-center mb-2 text-xs">ÁREAS PRIORITÁRIAS:</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {Array.from({length: 9}).map((_, i) => <div key={i} className="bg-white p-2 h-5 border border-yellow-100 rounded"></div>)}
            </div>
        </div>

        <div className="border border-green-200 rounded-md p-1 bg-green-50">
            <h4 className="font-bold text-green-700 bg-green-200 p-2 rounded-md text-center mb-2 text-xs">PASSOS PARA ALCANÇAR MINHAS METAS:</h4>
            <div className="space-y-2">
                {Array.from({length: 8}).map((_, i) => <div key={i} className="bg-white p-2 h-5 border border-green-100 rounded"></div>)}
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-blue-200 rounded-md p-1 bg-blue-50">
                <h4 className="font-bold text-blue-700 bg-blue-200 p-2 rounded-md text-center mb-2 text-xs">MOTIVAÇÃO / RECOMPENSA:</h4>
                <div className="bg-white p-2 h-24 border border-blue-100 rounded"></div>
            </div>
            <div className="border border-purple-200 rounded-md p-1 bg-purple-50">
                <h4 className="font-bold text-purple-700 bg-purple-200 p-2 rounded-md text-center mb-2 text-xs">NOTAS:</h4>
                <div className="space-y-1">
                     {Array.from({length: 6}).map((_, i) => <div key={i} className="bg-white p-2 h-2 border border-purple-100 rounded"></div>)}
                </div>
            </div>
        </div>
      </div>
    </PageContainer>
  );
};

export const CalendarTrackerPage: React.FC<{ page: PageData }> = ({ page }) => {
    const calendars = page.content as CalendarData[];
    const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    return (
        <PageContainer>
            <PageHeader title={page.title} subtitle={page.subtitle} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {calendars.map((cal, index) => (
                    <div key={index} className="bg-white p-2 rounded-lg border border-gray-200">
                        <h3 className={`text-center font-bold text-white p-1 rounded-md mb-2 text-sm ${PLANNER_COLORS[index % PLANNER_COLORS.length]}`}>{cal.month}</h3>
                        <div className="grid grid-cols-7 gap-1 text-center text-xs font-bold text-gray-500">
                            {days.map((day, i) => <div key={i}>{day}</div>)}
                        </div>
                        <div className="grid grid-cols-7 gap-1 mt-1">
                            {Array.from({ length: 35 }).map((_, i) => (
                                <div key={i} className="w-full aspect-square bg-gray-100 rounded-sm border border-gray-200"></div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </PageContainer>
    );
};

export const SchedulePage: React.FC<{ page: PageData }> = ({ page }) => {
  const sections = page.content as ScheduleSection[];
  return (
    <PageContainer>
      <PageHeader title={page.title} subtitle={page.subtitle} />
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-6">
          {section.title && <h3 className="text-lg font-bold text-center text-gray-700 bg-gray-100 p-2 rounded-md mb-4">{section.title}</h3>}
          <div className={`grid grid-cols-1 md:grid-cols-2 ${section.columns.length > 2 ? 'lg:grid-cols-3' : ''} ${section.columns.length > 3 ? 'xl:grid-cols-4' : ''} ${section.columns.length > 4 ? `xl:grid-cols-${section.columns.length}` : ''} gap-4`}>
            {section.columns.map((col, colIndex) => (
              <div key={colIndex} className="bg-white p-3 rounded-lg border border-gray-200">
                <h4 className={`text-base font-bold uppercase text-white text-center p-1 rounded-md mb-3 ${PLANNER_COLORS[colIndex % PLANNER_COLORS.length]}`}>{col.header}</h4>
                <ul className="space-y-2 text-sm">
                  {col.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-center bg-gray-50 p-1 rounded">
                      <div className="w-4 h-4 rounded-sm border-2 border-gray-300 mr-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </PageContainer>
  );
};

export const DeclutterGuidePage: React.FC<{ page: PageData }> = ({ page }) => {
  const Card: React.FC<{text: string, color: string, className?: string}> = ({text, color, className}) => (
    <div className={`p-2 rounded-lg text-center font-semibold text-base ${color} ${className}`}>
      {text}
    </div>
  );
  return (
    <PageContainer>
      <PageHeader title={page.title} subtitle={page.subtitle} />
      <div className="space-y-2 text-center">
        <Card text="Pegue um item" color="bg-gray-200" className="max-w-xs mx-auto" />
        <div className="text-2xl">↓</div>
        <Card text="Eu usei isso no último ano?" color="bg-purple-200 text-purple-800" />
        <div className="grid grid-cols-2 gap-4 items-start">
          <div className="text-2xl font-bold text-green-500">SIM ↓</div>
          <div className="text-2xl font-bold text-red-500">NÃO ↓</div>
          <Card text="Eu amo isso?" color="bg-green-200 text-green-800" />
          <Card text="Está quebrado ou vencido?" color="bg-red-200 text-red-800" />

          <div className="grid grid-cols-2 gap-4 items-start">
            <div className="text-2xl font-bold text-green-500">SIM ↓</div>
            <div className="text-2xl font-bold text-orange-500">NÃO ↓</div>
             <Card text="MANTER" color="bg-blue-300 text-blue-900" />
             <Card text="DOAR" color="bg-orange-300 text-orange-900" />
          </div>

           <div className="grid grid-cols-2 gap-4 items-start">
             <div className="text-2xl font-bold text-red-500">SIM ↓</div>
            <div className="text-2xl font-bold text-green-500">NÃO ↓</div>
             <Card text="LIXO" color="bg-red-300 text-red-900" />
             <Card text="Tem valor sentimental?" color="bg-yellow-200 text-yellow-800" />
          </div>
        </div>
         <div className="flex justify-end pr-8">
            <div className="w-1/4">
                 <div className="grid grid-cols-2 gap-4 items-start mt-2">
                    <div className="text-2xl font-bold text-green-500">SIM ↓</div>
                    <div className="text-2xl font-bold text-orange-500">NÃO ↓</div>
                    <Card text="MANTER (Caixa de Memórias)" color="bg-blue-300 text-blue-900" />
                    <Card text="DOAR" color="bg-orange-300 text-orange-900" />
                </div>
            </div>
         </div>
      </div>
    </PageContainer>
  );
};

export const DeclutterGridPage: React.FC<{ page: PageData }> = ({ page }) => {
  const rows = page.content as DeclutterGridRow[];
  const columns = ['Manter', 'Doar', 'Lixo', 'Realocar'];
  return (
    <PageContainer>
      <PageHeader title={page.title} subtitle={page.subtitle} />
      <div className="overflow-x-auto text-xs">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-purple-200 text-purple-800 uppercase text-xs">
              <th className="p-1 border border-purple-300 text-left">Área/Item</th>
              {columns.map((col, i) => (
                <th key={i} className={`p-1 border border-purple-300 w-20 text-center`}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="bg-white even:bg-purple-50">
                <td className="p-0.5 border border-gray-200 font-semibold text-gray-700 text-xs">{row.area}</td>
                {columns.map((_, colIndex) => (
                   <td key={colIndex} className="p-0.5 border border-gray-200 text-center">
                     <div className={`w-4 h-4 rounded-md ${PLANNER_COLORS[(rowIndex + colIndex) % PLANNER_COLORS.length]} mx-auto`}></div>
                   </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageContainer>
  );
};

export const SuppliesPage: React.FC<{ page: PageData }> = ({ page }) => {
  const pageSections = page.content as { title: string, sections: SuppliesSection[] }[];
  return (
    <PageContainer>
      <PageHeader title={page.title} subtitle={page.subtitle} />
      {pageSections.map((pageSection, pageSectionIndex) => (
        <div key={pageSectionIndex} className="mb-4 p-3 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-3">{pageSection.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pageSection.sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-white p-3 rounded-lg border border-gray-200">
                <h4 className={`text-base font-bold uppercase text-white text-center p-1 rounded-md mb-3 ${PLANNER_COLORS[sectionIndex % PLANNER_COLORS.length]}`}>{section.title}</h4>
                <ul className="space-y-2 text-sm">
                  {section.items.map((item, itemIndex) => (
                     <li key={itemIndex} className="flex items-center bg-gray-50 p-1 rounded">
                      <div className="w-4 h-4 rounded-sm border-2 border-gray-300 mr-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </PageContainer>
  );
};

export const ChallengePage: React.FC<{ page: PageData }> = ({ page }) => {
  const weeks = page.content as { week: number, title: string, challenges: ChecklistSection[] }[];
  return (
    <PageContainer>
      <PageHeader title={page.title} subtitle={page.subtitle} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className={`p-3 rounded-lg bg-white border-l-4 ${PLANNER_COLORS[(week.week-1) % PLANNER_COLORS.length].replace('bg-', 'border-')}`}>
            <h3 className="text-lg font-bold text-gray-800">S{week.week}: {week.title}</h3>
            {week.challenges.map((challenge, challengeIndex) => (
              <div key={challengeIndex} className="mt-1">
                <ul className="space-y-1 mt-1 text-sm">
                  {challenge.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-center">
                      <div className="w-4 h-4 rounded-sm border-2 border-gray-300 mr-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{task.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </PageContainer>
  );
};

export const MaintenanceChecklistPage: React.FC<{ page: PageData }> = ({ page }) => {
  const sections = page.content as MaintenanceSection[];
  return (
    <PageContainer>
      <PageHeader title={page.title} subtitle={page.subtitle} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="bg-white p-3 rounded-lg border border-gray-200">
            <h4 className={`text-base font-bold uppercase text-white text-center p-1 rounded-md mb-3 ${PLANNER_COLORS[sectionIndex % PLANNER_COLORS.length]}`}>{section.season}</h4>
            <ul className="space-y-2">
              {section.tasks.map((task, taskIndex) => (
                <li key={taskIndex} className="flex items-center bg-gray-50 p-1 rounded">
                  <div className="w-4 h-4 rounded-sm border-2 border-gray-300 mr-2 flex-shrink-0"></div>
                  <span className="text-gray-600 text-xs">{task}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PageContainer>
  );
};

export const MaintenanceLogPage: React.FC<{ page: PageData }> = ({ page }) => {
  const numRows = 18;
  return (
    <PageContainer>
      <PageHeader title={page.title} subtitle={page.subtitle} />
      <div className="overflow-x-auto text-xs">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-200 text-blue-800 uppercase">
              <th className="p-2 border border-blue-300">Data</th>
              <th className="p-2 border border-blue-300">Item/Serviço</th>
              <th className="p-2 border border-blue-300">Fornecedor/Contato</th>
              <th className="p-2 border border-blue-300">Custo</th>
              <th className="p-2 border border-blue-300">Notas</th>
              <th className="p-1 border border-blue-300 w-10">✓</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: numRows }).map((_, i) => (
              <tr key={i} className="bg-white">
                <td className="p-1 border border-gray-200"></td>
                <td className="p-1 border border-gray-200"></td>
                <td className="p-1 border border-gray-200"></td>
                <td className="p-1 border border-gray-200"></td>
                <td className="p-1 border border-gray-200"></td>
                <td className="p-1 border border-gray-200 text-center"><div className={`w-4 h-4 rounded-sm ${PLANNER_COLORS[i % PLANNER_COLORS.length]} mx-auto`}></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageContainer>
  );
};

export const ProjectPlannerPage: React.FC<{ page: PageData }> = ({ page }) => {
  const Section: React.FC<{title: string, color: string, children: React.ReactNode}> = ({title, color, children}) => (
    <div className={`border ${color.replace('bg-', 'border-').replace('-200', '-300')} rounded-lg`}>
      <h4 className={`font-bold text-center p-1 rounded-t-lg text-sm ${color} ${color.replace('bg-', 'text-').replace('-200', '-800')}`}>{title}</h4>
      <div className="p-2 bg-white rounded-b-lg">
        {children}
      </div>
    </div>
  );

  return (
    <PageContainer>
      <PageHeader title={page.title} subtitle={page.subtitle} />
      <div className="space-y-3 text-sm">
        <Section title="NOME DO PROJETO" color="bg-purple-200">
          <input type="text" className="w-full border-gray-200 rounded-md shadow-sm focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50 text-sm" />
        </Section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Section title="METAS E OBJETIVOS" color="bg-green-200">
            <textarea rows={3} className="w-full border-gray-200 rounded-md shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 text-sm"></textarea>
          </Section>
          <Section title="MATERIAIS NECESSÁRIOS" color="bg-yellow-200">
            <textarea rows={3} className="w-full border-gray-200 rounded-md shadow-sm focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 text-sm"></textarea>
          </Section>
        </div>

        <Section title="PASSO A PASSO" color="bg-orange-200">
           <textarea rows={4} className="w-full border-gray-200 rounded-md shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50 text-sm"></textarea>
        </Section>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
           <Section title="ORÇAMENTO" color="bg-red-200">
             <input type="text" className="w-full border-gray-200 rounded-md shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50 text-sm" />
           </Section>
            <Section title="PRAZO" color="bg-blue-200">
              <input type="date" className="w-full border-gray-200 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-sm" />
            </Section>
        </div>

        <Section title="NOTAS" color="bg-gray-200">
          <textarea rows={1} className="w-full border-gray-200 rounded-md shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50 text-sm"></textarea>
        </Section>

      </div>
    </PageContainer>
  );
};


export const InventoryPage: React.FC<{ page: PageData }> = ({ page }) => {
  const numRows = 20;
  return (
    <PageContainer>
      <PageHeader title={page.title} subtitle={page.subtitle} />
      <div className="overflow-x-auto text-sm flex-grow">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-green-200 text-green-800 uppercase text-xs">
              <th className="p-2 border border-green-300 text-left">Item</th>
              <th className="p-2 border border-green-300 w-24">Quantidade</th>
              <th className="p-2 border border-green-300 w-32">Validade</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: numRows }).map((_, i) => (
              <tr key={i} className="bg-white even:bg-green-50">
                <td className="p-1 border border-gray-200"></td>
                <td className="p-1 border border-gray-200"></td>
                <td className="p-1 border border-gray-200"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageContainer>
  );
};

export const ShoppingListPage: React.FC<{ page: PageData }> = ({ page }) => {
  const categories = ["LIMPEZA", "MERCEARIA", "CASA E JARDIM", "OUTROS"];
  const numRowsPerCat = 13;

  return (
    <PageContainer>
      <PageHeader title={page.title} subtitle={page.subtitle} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat, catIndex) => (
          <div key={catIndex} className="bg-white p-3 rounded-lg border border-gray-200">
            <h4 className={`text-base font-bold uppercase text-white text-center p-1 rounded-md mb-3 ${PLANNER_COLORS[catIndex % PLANNER_COLORS.length]}`}>{cat}</h4>
            <ul className="space-y-2">
              {Array.from({length: numRowsPerCat}).map((_, i) => (
                <li key={i} className="flex items-center">
                  <div className="w-4 h-4 rounded-md border-2 border-gray-300 mr-2"></div>
                  <div className="w-full h-px bg-gray-200"></div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PageContainer>
  );
};

export const NotesPage: React.FC<{ page: PageData }> = ({ page }) => {
  return (
    <PageContainer>
      <PageHeader title={page.title} subtitle={page.subtitle} />
      <div 
        className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex-grow"
        style={{
          backgroundImage: 'repeating-linear-gradient(white 0px, white 23px, #fde68a 24px)',
          lineHeight: '24px',
        }}
      >
        {/* Lined paper effect */}
      </div>
    </PageContainer>
  );
};

export const ZoneCleaningPage: React.FC<{ page: PageData }> = ({ page }) => {
  const zones = ['Zona 1', 'Zona 2', 'Zona 3', 'Zona 4', 'Zona 5'];
  return (
    <PageContainer>
      <PageHeader title={page.title} subtitle={page.subtitle} />
      <div className="text-center bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-3 rounded-r-lg mb-4 text-sm">
        <p>{page.content.explanation}</p>
      </div>
      <div className="space-y-3">
        {zones.map((zone, index) => (
          <div key={index} className="bg-white p-3 rounded-lg border border-gray-200">
            <h3 className={`font-bold text-lg mb-2 text-gray-700 ${PLANNER_COLORS[index % PLANNER_COLORS.length]} text-center p-1 rounded-md`}>{zone}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <label className="font-semibold text-gray-600">Cômodos / Áreas</label>
                <textarea rows={3} className="mt-1 w-full border-gray-200 rounded-md shadow-sm focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50 text-sm"></textarea>
              </div>
              <div>
                <label className="font-semibold text-gray-600">Tarefas de Limpeza Profunda</label>
                <textarea rows={3} className="mt-1 w-full border-gray-200 rounded-md shadow-sm focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50 text-sm"></textarea>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  );
};

export const WeeklyPlannerPage: React.FC<{ page: PageData }> = ({ page }) => {
  const days = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'];
  const Section: React.FC<{title: string, color: string, children: React.ReactNode, className?: string}> = ({title, color, children, className}) => (
    <div className={`bg-white rounded-lg border border-gray-200 ${className}`}>
      <h4 className={`font-bold text-center p-1 rounded-t-lg text-sm ${color} ${color.replace('bg-', 'text-').replace('-200', '-800')}`}>{title}</h4>
      <div className="p-2">{children}</div>
    </div>
  );
  return (
    <PageContainer>
      <PageHeader title={page.title} subtitle={page.subtitle} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        <div className="lg:col-span-2 space-y-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {days.slice(0, 4).map((day, i) => (
                <Section key={i} title={day} color={PLANNER_COLORS[i % PLANNER_COLORS.length]}>
                  <textarea rows={3} className="w-full border-gray-200 rounded-md shadow-sm text-xs focus:ring-0 focus:border-gray-400"></textarea>
                </Section>
              ))}
            </div>
        </div>
        <div className="space-y-2">
          <Section title="Prioridades da Semana" color="bg-red-200">
             <textarea rows={2} className="w-full border-gray-200 rounded-md shadow-sm text-xs focus:ring-0 focus:border-gray-400"></textarea>
          </Section>
           <Section title="Lista de Tarefas" color="bg-orange-200">
            <ul className="space-y-1 text-xs">
              {Array.from({length: 6}).map((_, i) => <li key={i} className="flex items-center"><div className="w-3 h-3 rounded-sm border-2 border-gray-300 mr-2"></div><div className="w-full h-px bg-gray-200"></div></li>)}
            </ul>
          </Section>
        </div>
      </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-2">
          {days.slice(4).map((day, i) => (
            <Section key={i} title={day} color={PLANNER_COLORS[(i + 4) % PLANNER_COLORS.length]}>
              <textarea rows={3} className="w-full border-gray-200 rounded-md shadow-sm text-xs focus:ring-0 focus:border-gray-400"></textarea>
            </Section>
          ))}
      </div>
    </PageContainer>
  );
};

export const MealPlannerPage: React.FC<{ page: PageData }> = ({ page }) => {
  const days = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
  const meals = ['Café da Manhã', 'Almoço', 'Jantar'];
  const shoppingCats = ['Hortifrúti', 'Proteínas', 'Laticínios', 'Despensa', 'Outros'];

  return (
    <PageContainer>
      <PageHeader title={page.title} subtitle={page.subtitle} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 overflow-x-auto text-xs">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-1 border border-gray-300 bg-gray-100 w-20"></th>
                {meals.map(meal => <th key={meal} className={`p-1 border border-purple-300 bg-purple-200 text-purple-800`}>{meal}</th>)}
              </tr>
            </thead>
            <tbody>
              {days.map((day, i) => (
                <tr key={day} className="bg-white">
                  <td className={`p-1 border border-gray-300 font-bold ${PLANNER_COLORS[i % PLANNER_COLORS.length]} text-gray-700`}>{day}</td>
                  {meals.map((_, j) => <td key={j} className="p-1 border border-gray-200 h-14"><textarea className="w-full h-full border-0 focus:ring-0 resize-none text-xs p-1"></textarea></td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-center bg-green-200 text-green-800 p-1 rounded-md">Lista de Compras</h3>
          {shoppingCats.map((cat, i) => (
             <div key={i}>
              <h4 className="font-semibold text-gray-600 border-b-2 border-gray-300 pb-1 mb-1 text-sm">{cat}</h4>
              <textarea rows={2} className="w-full bg-green-50 border-green-200 rounded-md shadow-sm text-xs focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"></textarea>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export const BrainDumpPage: React.FC<{ page: PageData }> = ({ page }) => (
    <PageContainer>
        <PageHeader title={page.title} subtitle={page.subtitle} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
          <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg border-2 border-dashed border-blue-300 flex flex-col">
            <h3 className="text-center font-fredoka text-xl text-blue-600 mb-2">A Fazer Urgente</h3>
            <div className="flex-grow"></div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg border-2 border-dashed border-yellow-300 flex flex-col">
            <h3 className="text-center font-fredoka text-xl text-yellow-600 mb-2">Ideias & Inspirações</h3>
             <div className="flex-grow"></div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg border-2 border-dashed border-green-300 flex flex-col">
            <h3 className="text-center font-fredoka text-xl text-green-600 mb-2">Para Comprar</h3>
             <div className="flex-grow"></div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg border-2 border-dashed border-red-300 flex flex-col">
            <h3 className="text-center font-fredoka text-xl text-red-600 mb-2">Lembretes & Prazos</h3>
             <div className="flex-grow"></div>
          </div>
        </div>
    </PageContainer>
);

export const PasswordTrackerPage: React.FC<{ page: PageData }> = ({ page }) => {
  const numRows = 18;
  return (
    <PageContainer>
      <PageHeader title={page.title} subtitle={page.subtitle} />
      <div className="overflow-x-auto text-xs flex-grow">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-teal-200 text-teal-800 uppercase">
              <th className="p-2 border border-teal-300">Website</th>
              <th className="p-2 border border-teal-300">Usuário</th>
              <th className="p-2 border border-teal-300">Senha</th>
              <th className="p-2 border border-teal-300">Notas</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: numRows }).map((_, i) => (
              <tr key={i} className="bg-white even:bg-teal-50">
                <td className="p-1 border border-gray-200"></td>
                <td className="p-1 border border-gray-200"></td>
                <td className="p-1 border border-gray-200"></td>
                <td className="p-1 border border-gray-200"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageContainer>
  );
};

export const ContactsPage: React.FC<{ page: PageData }> = ({ page }) => {
  const numRows = 18;
  return (
    <PageContainer>
      <PageHeader title={page.title} subtitle={page.subtitle} />
      <div className="overflow-x-auto text-xs flex-grow">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-pink-200 text-pink-800 uppercase">
              <th className="p-2 border border-pink-300">Nome</th>
              <th className="p-2 border border-pink-300">Relação</th>
              <th className="p-2 border border-pink-300">Telefone</th>
              <th className="p-2 border border-pink-300">Email/Endereço</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: numRows }).map((_, i) => (
              <tr key={i} className="bg-white even:bg-pink-50">
                <td className="p-1 border border-gray-200"></td>
                <td className="p-1 border border-gray-200"></td>
                <td className="p-1 border border-gray-200"></td>
                <td className="p-1 border border-gray-200"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageContainer>
  );
};

const FormRow: React.FC<{ label: string }> = ({ label }) => (
  <div className="grid grid-cols-3 items-center gap-2 py-1 border-b border-gray-100">
    <label className="font-semibold text-gray-600 text-xs">{label}:</label>
    <input type="text" className="col-span-2 w-full border-gray-200 rounded-md shadow-sm text-xs focus:ring-0 focus:border-gray-400 p-1" />
  </div>
);

const InfoSection: React.FC<{title: string, color: string, children: React.ReactNode, className?: string}> = ({title, color, children, className}) => (
    <div className={`bg-white rounded-lg border ${color.replace('bg-', 'border-').replace('-200', '-300')} ${className}`}>
        <h4 className={`font-bold text-center p-1 rounded-t-lg text-sm ${color} ${color.replace('bg-', 'text-').replace('-200', '-800')}`}>{title}</h4>
        <div className="p-2 space-y-1">{children}</div>
    </div>
);

export const MonthlyBudgetPage: React.FC<{ page: PageData }> = ({ page }) => {
  return (
    <PageContainer>
      <PageHeader title={page.title} subtitle={page.subtitle} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <InfoSection title="FONTES DE RENDA" color="bg-green-200">
            {Array.from({length: 4}).map((_, i) => <FormRow key={i} label={`Fonte ${i + 1}`} />)}
            <FormRow label="TOTAL DE RENDA" />
        </InfoSection>
        <div className="space-y-4">
            <InfoSection title="DESPESAS FIXAS" color="bg-red-200">
                 {Array.from({length: 5}).map((_, i) => <FormRow key={i} label={`Despesa ${i + 1}`} />)}
            </InfoSection>
            <InfoSection title="DESPESAS VARIÁVEIS" color="bg-orange-200">
                 {Array.from({length: 5}).map((_, i) => <FormRow key={i} label={`Despesa ${i + 1}`} />)}
            </InfoSection>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <InfoSection title="TOTAL DE DESPESAS" color="bg-yellow-200">
            <input type="text" className="w-full border-gray-200 rounded-md shadow-sm text-xs p-1 focus:ring-0 focus:border-yellow-400" />
        </InfoSection>
        <InfoSection title="POUPANÇA" color="bg-blue-200">
            <input type="text" className="w-full border-gray-200 rounded-md shadow-sm text-xs p-1 focus:ring-0 focus:border-blue-400" />
        </InfoSection>
        <InfoSection title="SALDO FINAL" color="bg-purple-200">
            <input type="text" className="w-full border-gray-200 rounded-md shadow-sm text-xs p-1 focus:ring-0 focus:border-purple-400" />
        </InfoSection>
      </div>
    </PageContainer>
  );
};

export const ExpenseTrackerPage: React.FC<{ page: PageData }> = ({ page }) => {
  const numRows = 19;
  return (
    <PageContainer>
      <PageHeader title={page.title} subtitle={page.subtitle} />
      <div className="overflow-x-auto text-xs flex-grow">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-yellow-200 text-yellow-800 uppercase">
              <th className="p-2 border border-yellow-300 w-24">Data</th>
              <th className="p-2 border border-yellow-300">Descrição</th>
              <th className="p-2 border border-yellow-300 w-40">Categoria</th>
              <th className="p-2 border border-yellow-300 w-28">Valor (R$)</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: numRows }).map((_, i) => (
              <tr key={i} className="bg-white even:bg-yellow-50">
                <td className="p-1 border border-gray-200"></td>
                <td className="p-1 border border-gray-200"></td>
                <td className="p-1 border border-gray-200"></td>
                <td className="p-1 border border-gray-200"></td>
              </tr>
            ))}
            <tr className="bg-yellow-100 font-bold">
                <td colSpan={3} className="p-2 text-right border border-yellow-300">TOTAL:</td>
                <td className="p-2 border border-yellow-300"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </PageContainer>
  );
};

export const BillTrackerPage: React.FC<{ page: PageData }> = ({ page }) => {
    const numRows = 15;
    return(
        <PageContainer>
            <PageHeader title={page.title} subtitle={page.subtitle} />
             <div className="overflow-x-auto text-xs flex-grow">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-blue-200 text-blue-800 uppercase">
                            <th className="p-2 border border-blue-300">Conta/Despesa</th>
                            <th className="p-2 border border-blue-300 w-32">Data de Venc.</th>
                            <th className="p-2 border border-blue-300 w-28">Valor (R$)</th>
                            <th className="p-2 border border-blue-300 w-16">Pago ✓</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: numRows }).map((_, i) => (
                        <tr key={i} className="bg-white even:bg-blue-50">
                            <td className="p-1 border border-gray-200"></td>
                            <td className="p-1 border border-gray-200"></td>
                            <td className="p-1 border border-gray-200"></td>
                            <td className="p-1 border border-gray-200 text-center">
                                <div className="w-5 h-5 rounded-md border-2 border-gray-300 mx-auto"></div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-4">
                <label className="font-bold text-gray-700 text-sm">Mês/Ano:</label>
                <input type="text" className="mt-1 block w-full md:w-1/3 bg-white border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-sm p-1" />
            </div>
        </PageContainer>
    )
};

export const HabitTrackerPage: React.FC<{ page: PageData }> = ({ page }) => {
  const numDays = 31;
  const numHabits = 12;
  return (
    <PageContainer>
      <PageHeader title={page.title} subtitle={page.subtitle} />
      <div className="overflow-x-auto text-xs flex-grow">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-lime-200 text-lime-800 uppercase">
              <th className="p-1 border border-lime-300 w-1/4">Hábito</th>
              {Array.from({ length: numDays }).map((_, i) => (
                <th key={i} className="p-1 border border-lime-300 font-normal w-5">{i + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: numHabits }).map((_, rowIndex) => (
              <tr key={rowIndex} className="bg-white">
                <td className="p-1 border border-gray-200"><input type="text" className="w-full border-0 text-xs focus:ring-0 p-1" /></td>
                {Array.from({ length: numDays }).map((_, colIndex) => (
                  <td key={colIndex} className="p-1 border border-gray-200 text-center hover:bg-lime-50 cursor-pointer">
                    <div className={`w-4 h-4 rounded-full ${PLANNER_COLORS[(rowIndex) % PLANNER_COLORS.length]} opacity-20 mx-auto`}></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-2">
        <label className="font-bold text-gray-700 text-sm">Mês:</label>
        <input type="text" className="mt-1 block w-full md:w-1/3 bg-white border-gray-300 rounded-md shadow-sm focus:border-lime-300 focus:ring focus:ring-lime-200 focus:ring-opacity-50 text-sm p-1" />
      </div>
    </PageContainer>
  );
};

export const PetCarePage: React.FC<{ page: PageData }> = ({ page }) => {
    return(
        <PageContainer>
            <PageHeader title={page.title} subtitle={page.subtitle} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InfoSection title="INFORMAÇÕES DO PET" color="bg-orange-200">
                    <FormRow label="Nome" />
                    <FormRow label="Espécie/Raça" />
                    <FormRow label="Aniversário" />
                    <FormRow label="Cor" />
                    <FormRow label="Microchip #" />
                </InfoSection>
                 <InfoSection title="CONTATOS IMPORTANTES" color="bg-teal-200">
                    <FormRow label="Veterinário" />
                    <FormRow label="Tel. Veterinário" />
                    <FormRow label="Emergência" />
                    <FormRow label="Groomer" />
                    <FormRow label="Pet Sitter" />
                </InfoSection>
                <InfoSection title="REGISTRO DE VACINAS" color="bg-red-200" className="md:col-span-2">
                     <textarea rows={4} className="w-full border-gray-200 rounded-md shadow-sm text-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"></textarea>
                </InfoSection>
                 <InfoSection title="ALIMENTAÇÃO" color="bg-yellow-200">
                     <textarea rows={2} className="w-full border-gray-200 rounded-md shadow-sm text-sm focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50"></textarea>
                </InfoSection>
                 <InfoSection title="MEDICAMENTOS" color="bg-blue-200">
                     <textarea rows={2} className="w-full border-gray-200 rounded-md shadow-sm text-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"></textarea>
                </InfoSection>
            </div>
        </PageContainer>
    )
}

export const MedicalInfoPage: React.FC<{ page: PageData }> = ({ page }) => {
    return(
        <PageContainer>
            <PageHeader title={page.title} subtitle={page.subtitle} />
             <div className="space-y-4">
                {Array.from({length: 2}).map((_, i) =>(
                    <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2 rounded-lg border-2 border-dashed border-red-200">
                        <InfoSection title="INFORMAÇÕES PESSOAIS" color="bg-red-200">
                            <FormRow label="Nome" />
                            <FormRow label="Nascimento" />
                            <FormRow label="Tipo Sanguíneo" />
                        </InfoSection>
                        <InfoSection title="CONTATOS DE EMERGÊNCIA" color="bg-orange-200">
                            <FormRow label="Nome" />
                            <FormRow label="Relação" />
                            <FormRow label="Telefone" />
                        </InfoSection>
                        <InfoSection title="PLANO DE SAÚDE" color="bg-yellow-200">
                            <FormRow label="Empresa" />
                            <FormRow label="Nº da Apólice" />
                            <FormRow label="Telefone" />
                        </InfoSection>
                        <InfoSection title="MÉDICOS" color="bg-green-200">
                            <FormRow label="Clínico Geral" />
                            <FormRow label="Dentista" />
                            <FormRow label="Outro" />
                        </InfoSection>
                         <InfoSection title="ALERGIAS" color="bg-blue-200" className="md:col-span-1">
                             <textarea rows={1} className="w-full border-gray-200 rounded-md shadow-sm text-sm"></textarea>
                        </InfoSection>
                         <InfoSection title="MEDICAMENTOS" color="bg-purple-200" className="md:col-span-1">
                             <textarea rows={1} className="w-full border-gray-200 rounded-md shadow-sm text-sm"></textarea>
                        </InfoSection>
                    </div>
                ))}
             </div>
        </PageContainer>
    );
};

export const SchoolInfoPage: React.FC<{ page: PageData }> = ({ page }) => {
    return (
        <PageContainer>
            <PageHeader title={page.title} subtitle={page.subtitle} />
            <div className="space-y-2">
                 {Array.from({length: 2}).map((_, i) =>(
                    <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2 rounded-lg bg-blue-50 border border-blue-200">
                        <InfoSection title="INFORMAÇÕES DO ALUNO" color="bg-blue-200">
                            <FormRow label="Nome do Aluno" />
                            <FormRow label="Ano/Série" />
                            <FormRow label="ID do Aluno" />
                        </InfoSection>
                         <InfoSection title="INFORMAÇÕES DA ESCOLA" color="bg-green-200">
                            <FormRow label="Nome da Escola" />
                            <FormRow label="Telefone" />
                            <FormRow label="Website" />
                        </InfoSection>
                         <InfoSection title="CONTATOS DOS PROFESSORES" color="bg-yellow-200" className="md:col-span-2">
                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                                <FormRow label="Professor(a)" />
                                <FormRow label="Email" />
                                <FormRow label="Professor(a)" />
                                <FormRow label="Email" />
                             </div>
                        </InfoSection>
                          <InfoSection title="DATAS IMPORTANTES" color="bg-purple-200">
                             <textarea rows={1} className="w-full border-gray-200 rounded-md shadow-sm text-sm"></textarea>
                        </InfoSection>
                         <InfoSection title="NOTAS" color="bg-orange-200">
                             <textarea rows={1} className="w-full border-gray-200 rounded-md shadow-sm text-sm"></textarea>
                        </InfoSection>
                    </div>
                 ))}
            </div>
        </PageContainer>
    );
};

export const ChoreChartPage: React.FC<{ page: PageData }> = ({ page }) => {
  const days = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
  const numChores = 14;
  return (
    <PageContainer>
      <PageHeader title={page.title} subtitle={page.subtitle} />
      <div className="overflow-x-auto text-xs flex-grow">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-indigo-200 text-indigo-800 uppercase">
              <th className="p-2 border border-indigo-300 text-left">Tarefa</th>
              <th className="p-2 border border-indigo-300">Responsável</th>
              {days.map(day => <th key={day} className="p-2 border border-indigo-300 w-10">{day}</th>)}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: numChores }).map((_, i) => (
              <tr key={i} className="bg-white even:bg-indigo-50">
                <td className="p-1 border border-gray-200"></td>
                <td className="p-1 border border-gray-200"></td>
                {days.map((_, j) => (
                   <td key={j} className="p-1 border border-gray-200 text-center">
                     <div className="w-5 h-5 rounded-sm border-2 border-gray-300 mx-auto"></div>
                   </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageContainer>
  );
};

export const RewardChartPage: React.FC<{ page: PageData }> = ({ page }) => {
    const numGoals = 5;
    const numSteps = 10;
    return (
        <PageContainer>
            <PageHeader title={page.title} subtitle={page.subtitle} />
            <div className="space-y-4">
                {Array.from({length: numGoals}).map((_, i) => (
                    <div key={i} className="bg-white p-3 rounded-lg border border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                            <div className="md:col-span-1">
                                <label className="font-semibold text-gray-600 text-sm">Meta/Objetivo {i+1}:</label>
                                <input type="text" className="mt-1 w-full border-gray-200 rounded-md shadow-sm text-sm p-1" />
                            </div>
                            <div className="md:col-span-2">
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {Array.from({length: numSteps}).map((_, j) => (
                                        <div key={j} className={`w-7 h-7 rounded-full border-2 border-dashed ${PLANNER_COLORS[i % PLANNER_COLORS.length].replace('bg-','border-')} flex items-center justify-center font-bold text-gray-400 text-xs`}>{j+1}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                         <div className="mt-2">
                            <label className="font-semibold text-gray-600 text-sm">Recompensa:</label>
                            <input type="text" className={`mt-1 w-full ${PLANNER_COLORS[i % PLANNER_COLORS.length]} border-0 rounded-md shadow-sm text-sm p-1`} />
                        </div>
                    </div>
                ))}
            </div>
        </PageContainer>
    );
};

export const FamilyMeetingNotesPage: React.FC<{ page: PageData }> = ({ page }) => {
    return (
        <PageContainer>
            <PageHeader title={page.title} subtitle={page.subtitle} />
            <div className="space-y-4">
                <InfoSection title="DETALHES DA REUNIÃO" color="bg-purple-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormRow label="Data" />
                        <FormRow label="Horário" />
                    </div>
                     <div>
                        <label className="font-semibold text-gray-600 text-xs">Participantes:</label>
                        <input type="text" className="mt-1 w-full border-gray-200 rounded-md shadow-sm text-xs focus:ring-0 focus:border-gray-400 p-1" />
                    </div>
                </InfoSection>

                <InfoSection title="ASSUNTOS A DISCUTIR" color="bg-yellow-200">
                    <ul className="space-y-2">
                        {Array.from({length: 6}).map((_, i) => (
                            <li key={i} className="flex items-center">
                                <div className="w-4 h-4 rounded-sm border-2 border-gray-300 mr-2"></div>
                                <div className="w-full h-px bg-gray-200"></div>
                            </li>
                        ))}
                    </ul>
                </InfoSection>

                <InfoSection title="ANOTAÇÕES E DECISÕES" color="bg-green-200">
                     <textarea rows={5} className="w-full border-gray-200 rounded-md shadow-sm text-sm"></textarea>
                </InfoSection>

                <InfoSection title="PRÓXIMOS PASSOS / ITENS DE AÇÃO" color="bg-blue-200">
                     <textarea rows={3} className="w-full border-gray-200 rounded-md shadow-sm text-sm"></textarea>
                </InfoSection>
            </div>
        </PageContainer>
    );
};

export const GratitudeJournalPage: React.FC<{ page: PageData }> = ({ page }) => {
    return(
        <PageContainer>
            <PageHeader title={page.title} subtitle={page.subtitle} />
            <div className="space-y-4">
                <div className="text-center">
                    <p className="text-base text-gray-600">"A gratidão dá sentido ao nosso passado, traz paz para o hoje e cria uma visão para o amanhã."</p>
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InfoSection title="COISAS PELAS QUAIS SOU GRATO(A) HOJE" color="bg-pink-200">
                        {Array.from({length: 5}).map((_, i) => (
                             <div key={i} className="flex items-center bg-white p-1 border border-pink-100 rounded">
                                <span className="font-bold mr-2 text-pink-400">{i + 1}.</span>
                                <input type="text" className="w-full border-0 focus:ring-0 text-sm" />
                            </div>
                        ))}
                    </InfoSection>
                     <InfoSection title="MOMENTOS FELIZES OU PEQUENAS VITÓRIAS" color="bg-yellow-200">
                        <textarea rows={8} className="w-full border-gray-200 rounded-md shadow-sm focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 text-sm"></textarea>
                    </InfoSection>
                 </div>
            </div>
        </PageContainer>
    );
};

export const WhenDidILastTrackerPage: React.FC<{ page: PageData }> = ({ page }) => {
  const numRows = 18;
  return (
    <PageContainer>
      <PageHeader title={page.title} subtitle={page.subtitle} />
      <div className="overflow-x-auto text-xs flex-grow">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-indigo-200 text-indigo-800 uppercase">
              <th className="p-2 border border-indigo-300">Tarefa</th>
              <th className="p-2 border border-indigo-300">Frequência</th>
              <th className="p-2 border border-indigo-300">Última Vez</th>
              <th className="p-2 border border-indigo-300">Próxima Vez</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: numRows }).map((_, i) => (
              <tr key={i} className="bg-white even:bg-indigo-50">
                <td className="p-1 border border-gray-200"></td>
                <td className="p-1 border border-gray-200"></td>
                <td className="p-1 border border-gray-200"></td>
                <td className="p-1 border border-gray-200"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageContainer>
  );
};

export const GoalsBoardPage: React.FC<{ page: PageData }> = ({ page }) => {
    const goalAreas = [
        { title: 'METAS PESSOAIS', color: 'bg-red-200' },
        { title: 'METAS DE CARREIRA', color: 'bg-blue-200' },
        { title: 'METAS DE SAÚDE', color: 'bg-green-200' },
        { title: 'METAS FINANCEIRAS', color: 'bg-yellow-200' },
    ];
    return(
        <PageContainer>
            <PageHeader title={page.title} subtitle={page.subtitle} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
                {goalAreas.map(area => (
                    <InfoSection key={area.title} title={area.title} color={area.color} className="flex flex-col">
                        <textarea rows={10} className="w-full border-gray-200 rounded-md shadow-sm text-sm focus:ring-0 focus:border-gray-400 flex-grow"></textarea>
                    </InfoSection>
                ))}
            </div>
        </PageContainer>
    );
};

export const ReadingTrackerPage: React.FC<{ page: PageData }> = ({ page }) => {
    const numBooks = 36;
    return (
        <PageContainer>
            <PageHeader title={page.title} subtitle={page.subtitle} />
            <div className="space-y-3">
                {Array.from({length: 4}).map((_, shelfIndex) => (
                    <div key={shelfIndex} className="relative bg-yellow-700 h-7 rounded shadow-lg flex items-end justify-center px-1">
                        <div className="absolute -bottom-0.5 w-full h-1.5 bg-yellow-800 rounded-b"></div>
                        <div className="flex items-end h-full space-x-0.5">
                            {Array.from({length: numBooks / 4}).map((_, bookIndex) => {
                                const bookHeight = Math.floor(Math.random() * (90 - 70 + 1) + 70); // Random height between 70% and 90%
                                const colorIndex = (shelfIndex * (numBooks / 4) + bookIndex) % PLANNER_COLORS.length;
                                return (
                                    <div key={bookIndex} className={`w-5 ${PLANNER_COLORS[colorIndex]} rounded-t-sm flex items-start justify-center pt-1 text-xs text-gray-700 writing-mode-vertical-rl transform rotate-180`}
                                         style={{ height: `${bookHeight}%`}}>
                                        <span className="truncate">Livro...</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </PageContainer>
    );
};

export const SubscriptionTrackerPage: React.FC<{ page: PageData }> = ({ page }) => {
  const numRows = 18;
  return (
    <PageContainer>
      <PageHeader title={page.title} subtitle={page.subtitle} />
      <div className="overflow-x-auto text-xs flex-grow">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-purple-200 text-purple-800 uppercase">
              <th className="p-2 border border-purple-300">Serviço/Assinatura</th>
              <th className="p-2 border border-purple-300">Custo (R$)</th>
              <th className="p-2 border border-purple-300">Frequência</th>
              <th className="p-2 border border-purple-300">Data de Renovação</th>
              <th className="p-2 border border-purple-300 w-20">Cancelar?</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: numRows }).map((_, i) => (
              <tr key={i} className="bg-white even:bg-purple-50">
                <td className="p-1 border border-gray-200"></td>
                <td className="p-1 border border-gray-200"></td>
                <td className="p-1 border border-gray-200"></td>
                <td className="p-1 border border-gray-200"></td>
                <td className="p-1 border border-gray-200 text-center"><div className="w-4 h-4 rounded-sm border-2 border-gray-300 mx-auto"></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageContainer>
  );
};

export const VehicleMaintenanceLogPage: React.FC<{ page: PageData }> = ({ page }) => {
    const numRows = 12;
    return(
        <PageContainer>
            <PageHeader title={page.title} subtitle={page.subtitle} />
            <InfoSection title="INFORMAÇÕES DO VEÍCULO" color="bg-gray-200" className="mb-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                    <FormRow label="Marca/Modelo" />
                    <FormRow label="Ano" />
                    <FormRow label="Placa" />
                    <FormRow label="RENAVAM" />
                </div>
            </InfoSection>
            <div className="overflow-x-auto text-xs flex-grow">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-200 text-gray-800 uppercase">
                        <th className="p-2 border border-gray-300">Data</th>
                        <th className="p-2 border border-gray-300">Serviço Realizado</th>
                        <th className="p-2 border border-gray-300">Quilometragem</th>
                        <th className="p-2 border border-gray-300">Custo (R$)</th>
                        <th className="p-2 border border-gray-300">Fornecedor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: numRows }).map((_, i) => (
                        <tr key={i} className="bg-white even:bg-gray-50">
                            <td className="p-1 border border-gray-200"></td>
                            <td className="p-1 border border-gray-200"></td>
                            <td className="p-1 border border-gray-200"></td>
                            <td className="p-1 border border-gray-200"></td>
                            <td className="p-1 border border-gray-200"></td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </PageContainer>
    );
};

export const PartyPlannerPage: React.FC<{ page: PageData }> = ({ page }) => {
    return (
        <PageContainer>
            <PageHeader title={page.title} subtitle={page.subtitle} />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-sm">
                <div className="lg:col-span-1 space-y-4">
                    <InfoSection title="DETALHES DO EVENTO" color="bg-pink-200">
                        <FormRow label="Ocasião" />
                        <FormRow label="Data" />
                        <FormRow label="Hora" />
                        <FormRow label="Local" />
                        <FormRow label="Tema" />
                    </InfoSection>
                    <InfoSection title="LISTA DE CONVIDADOS" color="bg-purple-200">
                         <textarea rows={8} className="w-full border-gray-200 rounded-md shadow-sm text-xs"></textarea>
                    </InfoSection>
                </div>
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InfoSection title="CARDÁPIO" color="bg-orange-200">
                         <textarea rows={5} className="w-full border-gray-200 rounded-md shadow-sm text-xs"></textarea>
                    </InfoSection>
                    <InfoSection title="DECORAÇÃO" color="bg-yellow-200">
                         <textarea rows={5} className="w-full border-gray-200 rounded-md shadow-sm text-xs"></textarea>
                    </InfoSection>
                    <InfoSection title="LISTA DE TAREFAS" color="bg-green-200" className="md:col-span-2">
                         <textarea rows={4} className="w-full border-gray-200 rounded-md shadow-sm text-xs"></textarea>
                    </InfoSection>
                </div>
            </div>
        </PageContainer>
    );
};

export const TravelPlannerPage: React.FC<{ page: PageData }> = ({ page }) => {
    return(
        <PageContainer>
            <PageHeader title={page.title} subtitle={page.subtitle} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InfoSection title="DETALHES DA VIAGEM" color="bg-blue-200">
                    <FormRow label="Destino" />
                    <FormRow label="Data de Partida" />
                    <FormRow label="Data de Retorno" />
                    <FormRow label="Orçamento" />
                </InfoSection>
                <InfoSection title="ACOMODAÇÃO" color="bg-teal-200">
                    <FormRow label="Hotel/Local" />
                    <FormRow label="Endereço" />
                    <FormRow label="Check-in" />
                    <FormRow label="Check-out" />
                </InfoSection>
                <InfoSection title="TRANSPORTE" color="bg-green-200" className="md:col-span-2">
                    <textarea placeholder="Detalhes de voos, aluguel de carro, trens, etc." rows={3} className="w-full border-gray-200 rounded-md shadow-sm text-sm"></textarea>
                </InfoSection>
                <InfoSection title="ROTEIRO / ATIVIDADES" color="bg-yellow-200" className="md:col-span-2">
                     <textarea rows={6} className="w-full border-gray-200 rounded-md shadow-sm text-sm"></textarea>
                </InfoSection>
            </div>
        </PageContainer>
    );
};

export const PackingListPage: React.FC<{ page: PageData }> = ({ page }) => {
    const categories = [
        { title: 'ROUPAS', color: 'bg-red-200' },
        { title: 'HIGIENE', color: 'bg-blue-200' },
        { title: 'DOCUMENTOS', color: 'bg-green-200' },
        { title: 'ELETRÔNICOS', color: 'bg-yellow-200' },
        { title: 'ESSENCIAIS', color: 'bg-purple-200' },
        { title: 'OUTROS', color: 'bg-orange-200' },
    ];
    return (
        <PageContainer>
            <PageHeader title={page.title} subtitle={page.subtitle} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map(cat => (
                    <InfoSection key={cat.title} title={cat.title} color={cat.color}>
                        <ul className="space-y-2 text-sm">
                            {Array.from({length: 8}).map((_, i) => (
                                <li key={i} className="flex items-center">
                                    <div className="w-4 h-4 rounded-sm border-2 border-gray-300 mr-2"></div>
                                    <div className="w-full h-px bg-gray-200"></div>
                                </li>
                            ))}
                        </ul>
                    </InfoSection>
                ))}
            </div>
        </PageContainer>
    );
};

export const FinalPage: React.FC<{ page: PageData }> = ({ page }) => (
    <PageContainer>
      <div className="flex flex-col items-center justify-center h-full text-center p-4">
        <ThankYouIcon className="w-24 h-24 text-red-300" />
        <h1 className="text-5xl md:text-7xl font-bold mt-4 font-cursive text-gray-700">
            Obrigado
        </h1>
        <p className="text-gray-500 mt-4 max-w-md text-sm">Esperamos que este planejador ajude você a criar um espaço limpo e tranquilo. Lembre-se, o progresso é mais importante que a perfeição!</p>
      </div>
    </PageContainer>
);