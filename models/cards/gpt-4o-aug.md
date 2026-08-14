---
type: Model
title: GPT-4o (Aug)
creator: OpenAI
license: Proprietary
intelligence_index: 9.0
price_blended_usd_1m: 2.375
output_speed_tps: 88.0
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 33.1, z: -0.38, r: 44.2, estimated: false }  # 전문 지식
  reasoning: { s: 17.1, z: -0.89, r: 36.6, estimated: false }  # 추론
  coding: { s: 40.7, z: -0.31, r: 45.4, estimated: false }  # 코딩
  agentic: { s: 20.7, z: -0.63, r: 40.6, estimated: false }  # 에이전트
  trust: { s: 46.5, z: 0.87, r: 63.0, estimated: false }  # 신뢰성
  multimodal: { s: 58.6, z: -0.66, r: 40.1, estimated: false }  # 멀티모달
  long_context: { s: 47.0, z: -0.1, r: 48.5, estimated: false }  # 긴문맥
  instruction: { s: 33.8, z: -0.83, r: 37.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4o (Aug)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-14
timestamp: 2026-08-14T00:00:00Z
---

# GPT-4o (Aug)

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **9.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 지시 따르기, 추론

## 실용 지표
`입력 $2.5 · 출력 $10.0 · 혼합 $2.375/1M · 88.0 t/s · TTFT 1.16s · 128k ctx` · 가성비 3.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.2 | -0.38 | 실측 | [[aa-omniscience]] 24.0%×1.0, [[gpqa-diamond]] 52.0%×0.4, [[humanitys-last-exam]] 2.0%×0.3 |
| 추론 | 36.6 | -0.89 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 52.0%×1.0, [[humanitys-last-exam]] 2.0%×1.0 |
| 코딩 | 45.4 | -0.31 | 실측 | [[scicode]] 33.0%×1.0, [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 40.6 | -0.63 | 실측 | [[tau2-bench]] 29.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | 63.0 | +0.87 | 실측 | [[aa-omniscience]] 42.0%×1.0 |
| 멀티모달 | 40.1 | -0.66 | 실측 | [[mmmu-pro]] 56.0%×1.0 |
| 긴문맥 | 48.5 | -0.1 | 실측 | [[aa-lcr]] 39.0%×1.0 |
| 지시 따르기 | 37.5 | -0.83 | 실측 | [[ifbench]] 36.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
