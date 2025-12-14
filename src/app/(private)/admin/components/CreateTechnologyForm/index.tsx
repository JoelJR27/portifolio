import Input from '@/app/(private)/login/components/Input';
import Label from '@/app/(private)/login/components/Label';
import Accordion from '@/components/Accordion';
import { createTechnology } from '../../actions/createTechnology';
import Form from '@/components/Form';

export default function CreateTechnologyForm() {
  return (
    <Accordion>
      <Form action={createTechnology}>
        <Label htmlFor="technologyName">Nome da Tecnologia</Label>
        <Input name="technologyName" id="technologyName" type="text" />
        <Label htmlFor="technologyImageName">Nome da imagem</Label>
        <Input
          name="technologyImageName"
          id="technologyImageName"
          type="text"
        />
        <Label htmlFor="technologyImageLink">Link da imagem</Label>
        <Input
          name="technologyImageLink"
          id="technologyImageLink"
          type="text"
        />
      </Form>
    </Accordion>
  );
}
