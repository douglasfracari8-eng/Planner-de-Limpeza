import React, { useState, useEffect } from 'react';
import { PLANNER_DATA } from './constants';
import PlannerNavigation from './components/PlannerNavigation';
import { CoverPage, HacksPage, ChecklistPage, MasterListPage, CleaningLogPage, GoalsPage, CalendarTrackerPage, SchedulePage, DeclutterGuidePage, DeclutterGridPage, SuppliesPage, ChallengePage, FinalPage, MaintenanceChecklistPage, MaintenanceLogPage, ProjectPlannerPage, InventoryPage, ShoppingListPage, NotesPage, ZoneCleaningPage, WeeklyPlannerPage, MealPlannerPage, BrainDumpPage, PasswordTrackerPage, ContactsPage, MonthlyBudgetPage, ExpenseTrackerPage, BillTrackerPage, HabitTrackerPage, PetCarePage, MedicalInfoPage, SchoolInfoPage, GratitudeJournalPage, WhenDidILastTrackerPage, TravelPlannerPage, PackingListPage, PartyPlannerPage, VehicleMaintenanceLogPage, SubscriptionTrackerPage, GoalsBoardPage, ReadingTrackerPage, ChoreChartPage, RewardChartPage, FamilyMeetingNotesPage } from './components/PlannerPages';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);
  
  const page = PLANNER_DATA[currentPage];

  const renderPage = () => {
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

  return (
    <div className="bg-gray-50 min-h-screen pb-24" style={{backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '20px 20px'}}>
       <div className="bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
        {renderPage()}
       </div>
      <PlannerNavigation
        currentPage={currentPage}
        totalPages={PLANNER_DATA.length}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default App;