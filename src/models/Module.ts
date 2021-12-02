import Lesson from '@models/Lesson';

interface Module {
  id: string;
  name: string;
  slug: string;
  description: string;
  lessons: Lesson[];
  sequence: number;
  is_active: boolean;
}

export default Module;
