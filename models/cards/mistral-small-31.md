---
type: Model
title: Mistral Small 3.1
creator: Mistral
license: Open
intelligence_index: 7.0
price_blended_usd_1m: 0.116
output_speed_tps: None
context_window: 128000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 23.6, z: -0.85, r: 37.2, estimated: false }  # 전문 지식
  reasoning: { s: 15.2, z: -0.96, r: 35.7, estimated: false }  # 추론
  coding: { s: 27.4, z: -0.27, r: 46.0, estimated: false }  # 코딩
  agentic: { s: 12.8, z: -0.96, r: 35.6, estimated: false }  # 에이전트
  trust: { s: 20.6, z: -0.24, r: 46.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 24.7, z: -0.79, r: 38.1, estimated: false }  # 긴문맥
  instruction: { s: 25.4, z: -1.17, r: 32.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Small 3.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-26
timestamp: 2026-09-26T00:00:00Z
---

# Mistral Small 3.1

Mistral · Open · Small · 컨텍스트 128k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 에이전트, 지시 따르기

## 실용 지표
`입력 $0.11 · 출력 $0.17 · 혼합 $0.116/1M · None t/s · TTFT Nones · 128k ctx` · 가성비 60.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.2 | -0.85 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 45.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 35.7 | -0.96 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 45.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 46.0 | -0.27 | 실측 | [[scicode]] 28.0%×1.0, [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 35.6 | -0.96 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 25.0%×1.0, [[tau3-banking]] 7.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | 46.4 | -0.24 | 실측 | [[aa-omniscience]] 22.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 38.1 | -0.79 | 실측 | [[aa-lcr]] 22.0%×1.0 |
| 지시 따르기 | 32.5 | -1.17 | 실측 | [[ifbench]] 30.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
