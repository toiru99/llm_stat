---
type: Model
title: Mistral Small 3.1
creator: Mistral
license: Open
intelligence_index: 7.0
price_blended_usd_1m: 0.0855
output_speed_tps: 55.0
context_window: 128000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 23.6, z: -0.9, r: 36.5, estimated: false }  # 전문 지식
  reasoning: { s: 15.2, z: -1.0, r: 35.1, estimated: false }  # 추론
  coding: { s: 27.4, z: -0.36, r: 44.6, estimated: false }  # 코딩
  agentic: { s: 15.3, z: -0.67, r: 39.9, estimated: false }  # 에이전트
  trust: { s: 20.6, z: -0.3, r: 45.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 24.7, z: -0.85, r: 37.3, estimated: false }  # 긴문맥
  instruction: { s: 25.4, z: -1.25, r: 31.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Small 3.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Mistral Small 3.1

Mistral · Open · Small · 컨텍스트 128k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.08 · 출력 $0.14 · 혼합 $0.0855/1M · 55.0 t/s · TTFT 1.08s · 128k ctx` · 가성비 81.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.5 | -0.9 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 45.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 35.1 | -1.0 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 45.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 44.6 | -0.36 | 실측 | [[scicode]] 28.0%×1.0, [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 39.9 | -0.67 | 실측 | [[gdpval]] 376.0%×1.0, [[tau3-banking]] 7.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | 45.5 | -0.3 | 실측 | [[aa-omniscience]] 22.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 37.3 | -0.85 | 실측 | [[aa-lcr]] 22.0%×1.0 |
| 지시 따르기 | 31.3 | -1.25 | 실측 | [[ifbench]] 30.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
