import assert from "node:assert/strict";
import test from "node:test";
import { projects, getProject } from "../src/content/projects";
import { experiences } from "../src/content/experiences";
import { academics } from "../src/content/academics";
import { profile } from "../src/content/profile";

test("publica exatamente os três cases selecionados com slugs únicos", () => {
  assert.equal(projects.length, 3);
  assert.equal(new Set(projects.map((project) => project.slug)).size, projects.length);
  for (const project of projects) {
    assert.equal(getProject(project.slug), project);
    assert.ok(project.contributions.length > 0);
    assert.ok(project.decisions.length > 0);
    assert.ok(project.limitations.length > 0);
    assert.ok(project.links.some((link) => link.kind === "code"));
  }
});

test("mantém o posicionamento e os vínculos editoriais aprovados", () => {
  assert.equal(profile.title, "Desenvolvedor Full Stack");
  assert.equal(profile.linkedin, "https://linkedin.com/in/invencaosts/");
  assert.equal(experiences[0].roles[0].title, "Desenvolvedor de Software Júnior");
  assert.ok(!experiences.some((experience) => experience.organization.includes("CNPq")));
  assert.ok(academics.some((entry) => entry.id === "observatorio" && entry.institution.includes("CNPq") && entry.title === "Observatório Grilagem de Terras Ariovaldo Umbelino de Oliveira"));
  assert.ok(academics.some((entry) => entry.id === "morea" && entry.period.startsWith("Mai/2025") && entry.contributionMode === "equipe" && entry.description.includes("hardware") && entry.description.includes("plataforma web")));
  assert.ok(academics.some((entry) => entry.id === "lacid" && entry.period.startsWith("Jan/2026") && entry.kind === "Estudo independente" && entry.description.includes("cibersegurança")));
});
