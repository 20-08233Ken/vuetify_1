<template>
    <Vueform
      size="lg"
      style="width: 100%;margin-bottom: 8rem;"
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
      <StaticElement
      style="margin-top: 2rem; color: #D00412; font-size: 18px;font-weight: bold;"
        name="h4"
        tag="h4"
        content="Enrolled Students"
      />
      <TextElement
      style="color: #4B4B4B;"
        name="req_thesis"
        input-type="number"
        :rules="[
          'nullable',
          'numeric',
        ]"
        autocomplete="off"
        label="Requiring Thesis/Dissertation"
      />

      <TextElement
      style="color: #4B4B4B;"
        name="nreq_thesis"
        input-type="number"
        :rules="[
          'nullable',
          'numeric',
        ]"
        autocomplete="off"
        label="Not Requiring Thesis/Dissertation"
      />
      <ButtonElement
      style="color: #4B4B4B;"
        name="primaryButton"
        button-label="Add"
        align="right"
      />
    </Vueform>
  </template>