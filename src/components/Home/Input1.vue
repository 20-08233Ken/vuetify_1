<template>

<Vueform class="w-100"
    
>
    <SelectElement
      name="program"
      :items="[
        {
          value: 0,
          label: 'Bachelor of Science in Civil Engineer',
        },
        {
          value: 1,
          label: 'Bachelor of Science in Chemical Engineer',
        },
      ]"
      :search="true"
      :native="false"
      label="Program"
      input-type="search"
      autocomplete="off"
      :floating="false"
      size="md"

      class="text-grey-darken-1 "
    />
    <DateElement
      name="exam_date"
      label="Date of Exam"
      :floating="false"
      display-format="YYYY-MM-DD"
      size="md"
      class="text-grey-darken-1 "
    />
    <TextElement
      name="takers"
      input-type="number"
      :rules="[
        'nullable',
        'numeric',
      ]"
      autocomplete="off"
      label="Number of Takers"
      size="md"
      class="text-grey-darken-1 "
    />
    <TextElement
      name="passers"
      input-type="number"
      :rules="[
        'nullable',
        'numeric',
      ]"
      autocomplete="off"
      label="Number of passers"
      size="md"
      class="text-grey-darken-1 "
    
    />


    <ButtonElement
      name="submit"
      button-label="Add"
      :submits="true"
      align="right"
      :full="true"
      
    />
  </Vueform>
</template>
<!-- style="margin-top:1rem;padding-bottom: 10rem;" -->