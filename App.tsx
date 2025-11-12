
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { PLANNER_DATA } from './constants';
import { PageData } from './types';
import { CoverPage, HacksPage, ChecklistPage, MasterListPage, CleaningLogPage, GoalsPage, CalendarTrackerPage, SchedulePage, DeclutterGuidePage, DeclutterGridPage, SuppliesPage, ChallengePage, FinalPage, MaintenanceChecklistPage, MaintenanceLogPage, ProjectPlannerPage, InventoryPage, ShoppingListPage, NotesPage, ZoneCleaningPage, WeeklyPlannerPage, MealPlannerPage, BrainDumpPage, PasswordTrackerPage, ContactsPage, MonthlyBudgetPage, ExpenseTrackerPage, BillTrackerPage, HabitTrackerPage, PetCarePage, MedicalInfoPage, SchoolInfoPage, GratitudeJournalPage, WhenDidILastTrackerPage, TravelPlannerPage, PackingListPage, PartyPlannerPage, VehicleMaintenanceLogPage, SubscriptionTrackerPage, GoalsBoardPage, ReadingTrackerPage, ChoreChartPage, RewardChartPage, FamilyMeetingNotesPage } from './components/PlannerPages';
import { DownloadIcon } from './components/Icons';

declare global {
  interface Window {
    html2canvas: any;
    jspdf: any;
  }
}


const App: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const renderPage = (page: PageData) => {
    switch (page.type) {
      case 'cover':
        return <CoverPage page={page} />;
      case 'hacks':
        return <HacksPage page={page} />;
      case 'checklist':
        return <ChecklistPage page={page} />;
      case 'master-list':
        return <MasterListPage page={page} />;
      case 'log-book':
        return <CleaningLogPage page={page} />;
      case 'goals':
        return <GoalsPage page={page} />;
      case 'calendar-tracker':
        return <CalendarTrackerPage page={page} />;
      case 'schedule':
        return <SchedulePage page={page} />;
      case 'declutter-guide':
        return <DeclutterGuidePage page={page} />;
      case 'declutter-grid':
        return <DeclutterGridPage page={page} />;
      case 'supplies':
        return <SuppliesPage page={page} />;
      case 'challenge':
        return <ChallengePage page={page} />;
      case 'maintenance-checklist':
        return <MaintenanceChecklistPage page={page} />;
      case 'maintenance-log':
        return <MaintenanceLogPage page={page} />;
      case 'project-planner':
        return <ProjectPlannerPage page={page} />;
      case 'inventory':
        return <InventoryPage page={page} />;
      case 'shopping-list':
        return <ShoppingListPage page={page} />;
      case 'zone-cleaning':
        return <ZoneCleaningPage page={page} />;
      case 'weekly-planner':
        return <WeeklyPlannerPage page={page} />;
      case 'meal-planner':
        return <MealPlannerPage page={page} />;
      case 'brain-dump':
        return <BrainDumpPage page={page} />;
      case 'password-tracker':
        return <PasswordTrackerPage page={page} />;
      case 'contacts':
        return <ContactsPage page={page} />;
      case 'monthly-budget':
        return <MonthlyBudgetPage page={page} />;
      case 'expense-tracker':
        return <ExpenseTrackerPage page={page} />;
      case 'bill-tracker':
        return <BillTrackerPage page={page} />;
      case 'habit-tracker':
        return <HabitTrackerPage page={page} />;
      case 'pet-care':
        return <PetCarePage page={page} />;
      case 'medical-info':
        return <MedicalInfoPage page={page} />;
      case 'school-info':
        return <SchoolInfoPage page={page} />;
      case 'chore-chart':
        return <ChoreChartPage page={page} />;
      case 'reward-chart':
        return <RewardChartPage page={page} />;
      case 'family-meeting-notes':
        return <FamilyMeetingNotesPage page={page} />;
      case 'gratitude-journal':
        return <GratitudeJournalPage page={page} />;
      case 'when-did-i-last-tracker':
        return <WhenDidILastTrackerPage page={page} />;
      case 'goals-board':
        return <GoalsBoardPage page={page} />;
      case 'reading-tracker':
        return <ReadingTrackerPage page={page} />;
      case 'subscription-tracker':
        return <SubscriptionTrackerPage page={page} />;
      case 'vehicle-maintenance-log':
        return <VehicleMaintenanceLogPage page={page} />;
      case 'party-planner':
        return <PartyPlannerPage page={page} />;
      case 'travel-planner':
        return <TravelPlannerPage page={page} />;
      case 'packing-list':
        return <PackingListPage page={page} />;
      case 'notes':
        return <NotesPage page={page} />;
      case 'final':
        return <FinalPage page={page} />;
      default:
        // Fallback for other complex types that might not have a dedicated component yet
        if (page.content && Array.isArray(page.content) && page.content.every(item => item.columns)) {
          return <MasterListPage page={page} />;
        }
        return <ChecklistPage page={page} />;
    }
  };

  const handleDownload = async () => {
    if (!window.jspdf || !window.html2canvas) {
      console.error("PDF generation libraries not loaded.");
      alert("Não foi possível gerar o PDF. Por favor, recarregue a página e tente novamente.");
      return;
    }

    const pdfContainer = document.getElementById('pdf-container');
    if (!pdfContainer) {
        console.error("PDF container element not found.");
        alert("Ocorreu um erro na preparação do PDF. Por favor, recarregue a página.");
        return;
    }

    setIsGenerating(true);
    await new Promise(resolve => setTimeout(resolve, 100));

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF('p', 'mm', 'a4');
    const A4_WIDTH_MM = 210;
    const A4_HEIGHT_MM = 297;

    // Set a fixed size for the rendering container to maintain A4 aspect ratio and get good resolution
    pdfContainer.style.width = '1050px'; 
    pdfContainer.style.height = '1485px';

    for (let i = 0; i < PLANNER_DATA.length; i++) {
      const pageData = PLANNER_DATA[i];
      try {
        const root = ReactDOM.createRoot(pdfContainer);
        const pageToRender = (
          <div className="page-wrapper" style={{ margin: 0, maxWidth: 'none', boxShadow: 'none' }}>
            {renderPage(pageData)}
          </div>
        );
        
        await new Promise<void>(resolve => {
          root.render(pageToRender);
          setTimeout(resolve, 50); // Small delay to ensure paint
        });

        const canvas = await window.html2canvas(pdfContainer, {
          scale: 2,
          useCORS: true,
          logging: false,
          width: pdfContainer.scrollWidth,
          height: pdfContainer.scrollHeight,
          windowWidth: pdfContainer.scrollWidth,
          windowHeight: pdfContainer.scrollHeight,
        });

        const imgData = canvas.toDataURL('image/png');
        if (i > 0) {
          pdf.addPage();
        }

        const margin = 10;
        const imgWidth = A4_WIDTH_MM - margin * 2;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        pdf.addImage(imgData, 'PNG', margin, margin, imgWidth, imgHeight);

        root.unmount();
      } catch (error) {
        console.error(`Error processing page ${i + 1} (${pageData.id}):`, error);
        setIsGenerating(false);
        alert(`Ocorreu um erro ao gerar a página ${i + 1}. O download foi cancelado.`);
        pdfContainer.style.width = 'auto'; 
        pdfContainer.style.height = 'auto';
        return;
      }
    }

    pdfContainer.style.width = 'auto'; 
    pdfContainer.style.height = 'auto';
    pdf.save('planner-limpeza-tdah.pdf');
    setIsGenerating(false);
  };


  return (
    <div>
      {PLANNER_DATA.map(page => (
        <div className="page-wrapper" key={page.id}>
          {renderPage(page)}
        </div>
      ))}

      <button
        onClick={handleDownload}
        disabled={isGenerating}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 px-4 py-3 bg-purple-600 text-white font-bold rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 ease-in-out disabled:bg-gray-400 disabled:cursor-not-allowed"
        aria-label="Baixar Planner em PDF"
      >
        {isGenerating ? (
            <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="http://www.w3.org/2000/svg">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Gerando PDF...</span>
            </>
        ) : (
            <>
                <DownloadIcon className="w-6 h-6" />
                <span>Baixar PDF</span>
            </>
        )}
      </button>

    </div>
  );
};

export default App;
