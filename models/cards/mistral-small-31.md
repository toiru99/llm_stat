---
type: Model
title: Mistral Small 3.1
creator: Mistral
license: Open
intelligence_index: None
price_blended_usd_1m: 0.116
output_speed_tps: None
context_window: 128000
status: past
size_class: Small
params_b: 24
is_reasoning: false
radar:
  knowledge: { s: 25.4, z: -1.04, r: 34.4, estimated: false }  # 전문 지식
  reasoning: { s: 15.2, z: -0.99, r: 35.1, estimated: false }  # 추론
  coding: { s: 26.7, z: -0.48, r: 42.7, estimated: false }  # 코딩
  agentic: { s: 21.4, z: -0.91, r: 36.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 25.2, z: -1.0, r: 35.1, estimated: false }  # 긴문맥
  instruction: { s: 25.0, z: -1.06, r: 34.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Small 3.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Mistral Small 3.1

Mistral · Open · Small(24B) · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $0.11 · 출력 $0.17 · 혼합 $0.116/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 34.4 | -1.04 | 실측 | [[gpqa-diamond]] 45.3535%×0.4, [[humanitys-last-exam]] 4.30955%×0.3 |
| 추론 | 35.1 | -0.99 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 45.3535%×1.0, [[humanitys-last-exam]] 4.30955%×1.0 |
| 코딩 | 42.7 | -0.48 | 실측 | [[scicode]] 27.7778%×1.0, [[terminal-bench]] 7.57576%×0.5 |
| 에이전트 | 36.4 | -0.91 | 실측 | [[gdpval]] 383.81 Elo×1.0, [[tau2-bench]] 25.1462%×1.0, [[tau3-banking]] 7.42268%×1.0, [[terminal-bench]] 7.57576%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 35.1 | -1.0 | 실측 | [[aa-lcr]] 22.3333%×1.0 |
| 지시 따르기 | 34.1 | -1.06 | 실측 | [[ifbench]] 29.932%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
