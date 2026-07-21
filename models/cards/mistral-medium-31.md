---
type: Model
title: Mistral Medium 3.1
creator: Mistral
license: Proprietary
intelligence_index: 15.0
price_blended_usd_1m: None
output_speed_tps: 90.0
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 33.4, z: -0.35, r: 44.8, estimated: false }  # 전문 지식
  reasoning: { s: 21.4, z: -0.65, r: 40.3, estimated: false }  # 추론
  coding: { s: 43.3, z: -0.13, r: 48.1, estimated: false }  # 코딩
  agentic: { s: 22.6, z: -0.54, r: 42.0, estimated: false }  # 에이전트
  trust: { s: 21.2, z: -0.31, r: 45.3, estimated: false }  # 신뢰성
  multimodal: { s: 56.5, z: -0.72, r: 39.2, estimated: false }  # 멀티모달
  long_context: { s: 26.3, z: -0.67, r: 40.0, estimated: false }  # 긴문맥
  instruction: { s: 39.4, z: -0.54, r: 41.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Medium 3.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-21
timestamp: 2026-07-21T00:00:00Z
---

# Mistral Medium 3.1

Mistral · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **15.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 신뢰성
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $0.4 · 출력 $2.0 · 혼합 $None/1M · 90.0 t/s · TTFT 1.52s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.8 | -0.35 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 59.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 40.3 | -0.65 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 59.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 48.1 | -0.13 | 실측 | [[scicode]] 34.0%×1.0, [[terminal-bench]] 11.0%×0.5 |
| 에이전트 | 42.0 | -0.54 | 실측 | [[gdpval]] 5.0%×1.0, [[tau2-bench]] 41.0%×1.0, [[tau3-banking]] 8.0%×1.0, [[terminal-bench]] 11.0%×1.0 |
| 신뢰성 | 45.3 | -0.31 | 실측 | [[aa-omniscience]] 19.0%×1.0 |
| 멀티모달 | 39.2 | -0.72 | 실측 | [[mmmu-pro]] 54.0%×1.0 |
| 긴문맥 | 40.0 | -0.67 | 실측 | [[aa-lcr]] 20.0%×1.0 |
| 지시 따르기 | 41.8 | -0.54 | 실측 | [[ifbench]] 40.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
