<template>
    <Vueform
        class="w-100"
      size="lg"
    >
      <SelectElement
      style="color: #4B4B4B;"
        name="campus"
        :items="[
          {
            value: 0,
            label: 'Label',
          },
        ]"
        :search="true"
        :native="false"
        label="Campus"
        input-type="search"
        autocomplete="off"
      />
      <SelectElement
      style="color: #4B4B4B;"
        name="department"
        :items="[
          {
            value: 0,
            label: 'Label',
          },
        ]"
        :search="true"
        :native="false"
        label="Department"
        input-type="search"
        autocomplete="off"
      />
      <SelectElement
      style="color: #4B4B4B;"
        name="program"
        :items="[
          {
            value: 0,
            label: 'Label',
          },
        ]"
        :search="true"
        :native="false"
        label="Program"
        input-type="search"
        autocomplete="off"
      />
      <TextElement
      style="color: #4B4B4B;"
        name="p_position"
        label="PLANTILLA Position"
      />
      <SelectElement
      style="color: #4B4B4B;"
        name="select_3"
        :items="[
          {
            value: 0,
            label: 'Label',
          },
        ]"
        :search="true"
        :native="false"
        label="Faculty Engagement"
        input-type="search"
        autocomplete="off"
      />
      <TextElement
      style="color: #4B4B4B;"
        name="duration"
        label="Duration"
      />
      <ButtonElement
      style="color: #4B4B4B;"
        name="primaryButton"
        button-label="Add"
        align="right"
      />
    </Vueform>
  </template>