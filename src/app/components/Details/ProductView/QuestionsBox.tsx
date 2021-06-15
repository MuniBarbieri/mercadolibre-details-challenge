import React, {useState, FunctionComponent} from "react";
import {Stack, Text, Input, Button, FormLabel} from "@chakra-ui/react";

export const QuestionsBox: FunctionComponent = () => {
  const [question, setQuestion] = useState("");
  const [questionsContainer, setQuestionContainer] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const question = e.target.value;

    setQuestion(question);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuestionContainer([...questionsContainer, question]);
    setQuestion("");
  };

  return (
    <Stack direction="column" padding={10}>
      <form onSubmit={handleSubmit}>
        <FormLabel fontSize={20}>Preguntale al vendedor</FormLabel>
        <Stack direction="row">
          <Input
            focusBorderColor="blue.400"
            placeholder="Escribi tu pregunta..."
            size="lg"
            value={question}
            onChange={handleChange}
          />
          <Button colorScheme="twitter" size="lg" type="submit" variant="solid">
            Preguntar
          </Button>
        </Stack>
      </form>
      <Stack>
        <Text fontSize={20} fontWeight={500}>
          {" "}
          Ultimas realizadas
        </Text>
      </Stack>
      {questionsContainer.map((question, i) => (
        <Stack key={i}>
          <Text>{question}</Text>
        </Stack>
      ))}
    </Stack>
  );
};
