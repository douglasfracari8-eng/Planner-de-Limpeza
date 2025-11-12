export interface Task {
  text: string;
}

export interface ChecklistSection {
  title: string;
  tasks: Task[];
}

export interface Hack {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface MasterListColumn {
  title: string;
  items: string[];
}
export interface MasterListSection {
  title: string;
  columns: MasterListColumn[];
}

export interface LogEntry {
  date: string;
  time: string;
  area: string;
  by: string;
  notes: string;
}

export interface Goal {
  goal: string;
  reason: string;
}
export interface ScheduleColumn {
  header: string;
  tasks: string[];
  isCheckable?: boolean;
}
export interface ScheduleSection {
  title: string;
  columns: ScheduleColumn[];
}

export interface MaintenanceSection {
  season: string;
  tasks: string[];
}

export interface CalendarData {
  month: string;
}

export interface DeclutterGridRow {
  area: string;
}

export interface SuppliesSection {
    title: string;
    items: string[];
}

export type PageContent = 
  | ChecklistSection[] 
  | Hack[] 
  | MasterListSection[]
  | LogEntry[]
  | { goals: Goal[], priorityAreas: string[][], steps: string[], motivation: string, notes: string}
  | CalendarData[]
  | ScheduleSection[]
  | MaintenanceSection[]
  | DeclutterGridRow[]
  | { title: string, sections: SuppliesSection[] }[]
  | { week: number, title: string, challenges: ChecklistSection[] }[]
  | any;


export interface PageData {
  id: string;
  type: 'cover' | 'hacks' | 'checklist' | 'master-list' | 'log-book' | 'goals' | 'calendar-tracker' | 'schedule' | 'declutter-grid' | 'supplies' | 'challenge' | 'final' | 'declutter-guide' | 'maintenance-checklist' | 'maintenance-log' | 'project-planner' | 'shopping-list' | 'inventory' | 'notes' | 'zone-cleaning' | 'weekly-planner' | 'meal-planner' | 'brain-dump' | 'password-tracker' | 'contacts' | 'monthly-budget' | 'expense-tracker' | 'bill-tracker' | 'habit-tracker' | 'pet-care' | 'medical-info' | 'school-info' | 'gratitude-journal' | 'when-did-i-last-tracker' | 'travel-planner' | 'packing-list' | 'party-planner' | 'vehicle-maintenance-log' | 'subscription-tracker' | 'goals-board' | 'reading-tracker' | 'chore-chart' | 'reward-chart' | 'family-meeting-notes';
  title: string;
  subtitle?: string;
  content: PageContent;
  footer?: {
    tip?: string;
    showNotes?: boolean;
    showReward?: boolean;
    note?: string;
  };
}