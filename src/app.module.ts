import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SkillsModule } from './skills/skills.module';
import { AiFeedbacksModule } from './ai_feedbacks/ai_feedbacks.module';
import { SharedProjectsModule } from './shared_projects/shared_projects.module';
import { DailyTasksModule } from './daily_tasks/daily_tasks.module';
import { TasksModule } from './tasks/tasks.module';
import { ProgressLogModule } from './progress_log/progress_log.module';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { PortfolioModule } from './portfolio/portfolio.module';

@Module({
  imports: [
    UsersModule,
    ProjectsModule,
    PortfolioModule,
    ProgressLogModule,
    TasksModule,
    DailyTasksModule,
    SharedProjectsModule,
    SharedProjectsModule,
    AiFeedbacksModule,
    SkillsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
