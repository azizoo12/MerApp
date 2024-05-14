import React, { useState } from 'react';

const TaskForm = () => {
  const [task, setTask] = useState('');
  const [reminder, setReminder] = useState(false);
  const [frequency, setFrequency] = useState('none');

  const onSubmit = (e) => {
    e.preventDefault();

    console.log({ task, reminder, frequency });

    setTask('');
    setReminder(false);
    setFrequency('none');
  };

  return (
    <form className='task-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder='Enter task'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      {reminder && (
        <div className='form-control'>
          <label>Reminder Frequency</label>
          <select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
          >
            <option value='none'>None</option>
            <option value='daily'>Daily</option>
            <option value='weekly'>Weekly</option>
            <option value='date'>Specific Date</option>
          </select>
        </div>
      )}
      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  );
};

export default TaskForm;
