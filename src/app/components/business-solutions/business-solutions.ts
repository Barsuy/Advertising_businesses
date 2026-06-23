import { Component } from '@angular/core';

@Component({
  selector: 'app-business-solutions',
  standalone: true,
  templateUrl: './business-solutions.html',
  styleUrls: ['./business-solutions.css']
})
export class BusinessSolutionsComponent {

  solutions = [
    {
      title: 'פתרונות לחנויות',
      text: 'משיכת לקוחות מהרחוב והגדלת מכירות בעזרת תצוגת הולוגרמה מושכת עין.'
    },
    {
      title: 'פתרונות לתערוכות',
      text: 'בידול מהמתחרים ויצירת דוכן שמושך קהל באופן טבעי.'
    },
    {
      title: 'פתרונות להשקות מוצר',
      text: 'הצגת מוצר בצורה חדשנית שמייצרת אפקט “וואו” וזכירות גבוהה.'
    },
    {
      title: 'פתרונות לקניונים',
      text: 'הגדלת תנועה בחנויות והפיכת חלל פרסומי לאטרקטיבי יותר.'
    },
    {
      title: 'פתרונות לאירועי חברה',
      text: 'שדרוג חוויית העובדים והאורחים עם טכנולוגיה מרשימה.'
    },
    {
      title: 'פתרונות לשיווק ומיתוג',
      text: 'חיזוק המותג באמצעות חוויה ויזואלית בלתי נשכחת.'
    }
  ];
}