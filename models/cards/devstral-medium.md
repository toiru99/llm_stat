---
type: Model
title: Devstral Medium
creator: Mistral
license: Proprietary
intelligence_index: 12.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 28.3, z: -0.62, r: 40.6, estimated: false }  # 전문 지식
  reasoning: { s: 17.1, z: -0.91, r: 36.4, estimated: false }  # 추론
  coding: { s: 36.8, z: -0.49, r: 42.6, estimated: false }  # 코딩
  agentic: { s: 16.9, z: -0.78, r: 38.2, estimated: false }  # 에이전트
  trust: { s: 41.9, z: 0.55, r: 58.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 38.6, z: -0.37, r: 44.4, estimated: false }  # 긴문맥
  instruction: { s: 25.4, z: -1.19, r: 32.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Devstral Medium
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# Devstral Medium

Mistral · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **12.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.6 | -0.62 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 49.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 36.4 | -0.91 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 49.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 42.6 | -0.49 | 실측 | [[scicode]] 29.0%×1.0, [[terminal-bench]] 9.0%×0.5 |
| 에이전트 | 38.2 | -0.78 | 실측 | [[tau2-bench]] 20.0%×1.0, [[terminal-bench]] 9.0%×1.0 |
| 신뢰성 | 58.2 | +0.55 | 실측 | [[aa-omniscience]] 38.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 44.4 | -0.37 | 실측 | [[aa-lcr]] 32.0%×1.0 |
| 지시 따르기 | 32.2 | -1.19 | 실측 | [[ifbench]] 30.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
