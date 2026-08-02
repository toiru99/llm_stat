---
type: Model
title: GPT-4.1
creator: OpenAI
license: Proprietary
intelligence_index: 19.0
price_blended_usd_1m: None
output_speed_tps: 119.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 39.9, z: -0.07, r: 49.0, estimated: false }  # 전문 지식
  reasoning: { s: 25.2, z: -0.47, r: 43.0, estimated: false }  # 추론
  coding: { s: 49.3, z: 0.09, r: 51.4, estimated: false }  # 코딩
  agentic: { s: 34.3, z: -0.08, r: 48.8, estimated: false }  # 에이전트
  trust: { s: 21.8, z: -0.29, r: 45.6, estimated: false }  # 신뢰성
  multimodal: { s: 65.7, z: -0.29, r: 45.7, estimated: false }  # 멀티모달
  long_context: { s: 80.3, z: 0.91, r: 63.7, estimated: false }  # 긴문맥
  instruction: { s: 43.7, z: -0.39, r: 44.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-02
timestamp: 2026-08-02T00:00:00Z
---

# GPT-4.1

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **19.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 지시 따르기, 추론

## 실용 지표
`입력 $2.0 · 출력 $8.0 · 혼합 $None/1M · 119.0 t/s · TTFT 0.95s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.0 | -0.07 | 실측 | [[aa-omniscience]] 24.0%×1.0, [[gpqa-diamond]] 67.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 43.0 | -0.47 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 67.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 51.4 | +0.09 | 실측 | [[scicode]] 38.0%×1.0, [[terminal-bench]] 14.0%×0.5 |
| 에이전트 | 48.8 | -0.08 | 실측 | [[tau2-bench]] 47.0%×1.0, [[terminal-bench]] 14.0%×1.0 |
| 신뢰성 | 45.6 | -0.29 | 실측 | [[aa-omniscience]] 20.0%×1.0 |
| 멀티모달 | 45.7 | -0.29 | 실측 | [[mmmu-pro]] 61.0%×1.0 |
| 긴문맥 | 63.7 | +0.91 | 실측 | [[aa-lcr]] 61.0%×1.0 |
| 지시 따르기 | 44.1 | -0.39 | 실측 | [[ifbench]] 43.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
