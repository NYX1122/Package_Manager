import terminalAsker from 'terminal_asker';

import packageCreator from 'package_creator';
import packageDeletor from 'package_deletor';

export default async function () {
  try {
    const operation = await terminalAsker(
      'What operation do you want to perform?'
    );

    switch (operation) {
      case 'create':
        await packageCreator();
        break;
      case 'delete':
        await packageDeletor();
        break;
      default:
        throw new Error('Invalid operation.');
    }
  } catch (error) {
    console.error('Package_Manager encountered an error:');
    console.error(error);
  }
}
