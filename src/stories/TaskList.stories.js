
import TaskList from './TaskList.vue';

import * as TaskStories from './Task.stories';

export default {
 component: TaskList,
 title: '我的/待办列表',
 tags: ['autodocs'],
  decorators: [
    () => ({ template: '<div style="margin: 3em;"><story/></div>' }),
  ],
  argTypes: {
    onPinTask: {},
    onArchiveTask: {},
  },
};

const Template = (args) => ({
 components: { TaskList },
 setup() {
    return { args, ...TaskStories.actionsData };
  },
 template: '<TaskList v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  // Shaping the stories through args composition.
  // The data was inherited from the Default story in task.stories.js.
  tasks: [
    { ...TaskStories.Default.args.task, id: '1', title: 'Task 1' },
    { ...TaskStories.Default.args.task, id: '2', title: 'Task 2' },
    { ...TaskStories.Default.args.task, id: '3', title: 'Task 3' },
    { ...TaskStories.Default.args.task, id: '4', title: 'Task 4' },
    { ...TaskStories.Default.args.task, id: '5', title: 'Task 5' },
    { ...TaskStories.Default.args.task, id: '6', title: 'Task 6' },
  ],
};

export const WithPinnedTasks = {
  name: '带有置顶任务',
  args: {
    // Shaping the stories through args composition.
    // Inherited data coming from the Default story.
    tasks: [
      ...Default.args.tasks.slice(0, 5),
      { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
    ],
  }
}

export const Loading = {
  name: '加载中',
  args: {
    tasks: [],
    loading: true,
  }
}

export const Empty = {
  name: '空列表',
  args: {
    // Shaping the stories through args composition.
    // Inherited data coming from the Loading story.
    ...Loading.args,
    loading: false,
  }
};
