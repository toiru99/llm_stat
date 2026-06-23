---
type: Benchmark
title: GPQA Diamond
aa_metric: GPQA Diamond
column: "GPQA Diamond"
domain: Scientific Reasoning
category: 지식·추론
# 레이더 기여 (SSOT — build_cards.py가 읽음)
axes:
  - { axis: reasoning, weight: 1.0 }   # 주 기여: 과학적 추론
  - { axis: knowledge, weight: 0.4 }   # 부 기여: 자연과학 전문 지식 측면
attributes:
  modality: text
  task_type: 객관식 4지선다(MCQ)
  scoring: accuracy
  scale: "0–100%"
  guess_baseline: 25%
  n_items_full: 448
  n_items_diamond: 198
  domains: [생물학, 물리학, 화학]
  difficulty: 박사급 · Google-proof
  saturation: 상위권 포화 진행(프런티어 ~90%+), 중위권 변별력 유지
  contamination_risk: 중간(공개 MCQ)
  higher_is_better: true
org: NYU / Cohere / Anthropic
year: 2023
resource: https://arxiv.org/abs/2311.12022
paper: /benchmarks/sources/gpqa-2311.12022.pdf
tags: [science, reasoning, mcq, knowledge]
timestamp: 2026-06-23T00:00:00Z
---

# 무엇을 측정하나

생물학·물리학·화학의 **대학원(박사) 수준 전문 지식과 추론**을 측정한다. 핵심 설계 의도는 "Google-proof" — 비전문가가 웹을 검색해도 풀기 어렵게 만들어, 모델이 검색 가능한 표층 정보가 아니라 **진짜 전문가급 이해**를 갖췄는지 가린다. 원래는 인간이 검증하기 어려운 모델 출력을 감독하는 "확장 가능한 감독(scalable oversight)" 연구를 위해 만들어졌다.

# 과제 형식 / 예시

- 분야 전문가가 직접 작성한 **4지선다 객관식**.
- 한 문항은 깊은 도메인 개념 + 다단계 풀이를 요구(단순 사실 회상이 아님).
- 전체 448문항, 그중 **Diamond 서브셋 198문항**이 평가 표준(아래 참조). AA 리더보드가 쓰는 게 Diamond.

# 채점 방식

- 정답률(accuracy), 4지선다라 **추측 기저선 25%**.
- 단일 정답, 자동 채점.

# 점수 해석 (높음 / 낮음)

- **높음** = 이공계 박사급 문제를 검색 없이 풀어내는 과학 추론·지식이 강함.
- **낮음** = 표층 지식엔 강해도 전문가급 과학 추론에서 무너짐.
- 25% 부근 = 사실상 추측.

# 난이도 · 포화 · 현 SOTA

- 도메인 박사 전문가 정답률 **65%**(명백한 오류 제외 시 74%).
- 웹 접근 허용 비전문가는 문항당 30분+ 투자에도 **34%** → Google-proof 입증.
- 발표 당시 GPT-4 **39%**. 현재 프런티어 모델은 **~90%+**(리더보드 상위 GPT-5.5 94% 등) → **상위권은 포화 진행 중**, 중·하위권 변별에는 여전히 유효.

# 한계 · 주의

- **좁은 범위**: 자연과학 3개 분야에 한정 → "추론" 전반의 대리지표로는 부분적. (그래서 레이더에서 단독이 아니라 HLE·CritPt와 함께 추론 축을 구성.)
- **객관식 한계**: 추측·패턴 활용 여지(25% 기저선).
- **오염 위험 중간**: 공개 MCQ라 학습 데이터 유입 가능성. Diamond 설계가 이를 일부 완화.
- **상위 포화**: 최상위 모델 간 변별력이 줄어듦.

# Diamond 서브셋이란

전체 448문항 중 **전문가는 맞히고 다수 비전문가는 틀린** 198문항만 추린 고난도·고검증 세트. 난이도·품질이 가장 높아 사실상의 표준 평가셋.

# 다른 벤치마크와의 관계

- [[humanitys-last-exam]] HLE — 훨씬 넓은 분야 + 더 어려움(추론 축 동반).
- [[critpt]] CritPt — 물리 "연구 수준"으로 GPQA보다 깊음(추론 축 동반).
- [[mmmu-pro]] MMMU-Pro — 시각 다분야(멀티모달 축).

# 레이더 기여 근거

- **reasoning (1.0)**: 본질이 과학적 다단계 추론 → 추론 축 주 기여.
- **knowledge (0.4)**: 풀이에 자연과학 전문 지식이 필요 → 전문 지식 축에 부분 기여(가중치 낮게, 좁은 범위 반영).

# 한국 · 앨런 관점

이공계·연구 질의에서 모델이 얼마나 믿을 만한지 가늠하는 축. 과학·기술 상담형 사용에 직결.

# 원본 자료

- 논문 PDF: [gpqa-2311.12022.pdf](/benchmarks/sources/gpqa-2311.12022.pdf)
- 축 정의: [[radar-spec]] · 능력 영역: [[domains-index]]

# Citations

[1] [GPQA: A Graduate-Level Google-Proof Q&A Benchmark](https://arxiv.org/abs/2311.12022)
