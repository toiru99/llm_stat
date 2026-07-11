---
type: Model
title: GPT-4o (Aug)
creator: OpenAI
license: Proprietary
intelligence_index: 10.0
price_blended_usd_1m: 2.38
output_speed_tps: 76.0
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 35.0, z: -0.26, r: 46.1, estimated: false }  # 전문 지식
  reasoning: { s: 17.9, z: -0.82, r: 37.7, estimated: false }  # 추론
  coding: { s: 40.7, z: -0.22, r: 46.6, estimated: false }  # 코딩
  agentic: { s: 20.7, z: -0.6, r: 41.0, estimated: false }  # 에이전트
  trust: { s: 47.1, z: 0.9, r: 63.5, estimated: false }  # 신뢰성
  multimodal: { s: 59.4, z: -0.57, r: 41.4, estimated: false }  # 멀티모달
  long_context: { s: 46.1, z: -0.07, r: 49.0, estimated: false }  # 긴문맥
  instruction: { s: 33.8, z: -0.76, r: 38.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4o (Aug)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-11
timestamp: 2026-07-11T00:00:00Z
---

# GPT-4o (Aug)

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **10.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 지시 따르기, 추론

## 실용 지표
`입력 $2.5 · 출력 $10.0 · 혼합 $2.38/1M · 76.0 t/s · TTFT 1.66s · 128k ctx` · 가성비 4.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.1 | -0.26 | 실측 | [[aa-omniscience]] 24.0%×1.0, [[gpqa-diamond]] 52.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 37.7 | -0.82 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 52.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 46.6 | -0.22 | 실측 | [[scicode]] 33.0%×1.0, [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 41.0 | -0.6 | 실측 | [[tau2-bench]] 29.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | 63.5 | +0.9 | 실측 | [[aa-omniscience]] 41.0%×1.0 |
| 멀티모달 | 41.4 | -0.57 | 실측 | [[mmmu-pro]] 56.0%×1.0 |
| 긴문맥 | 49.0 | -0.07 | 실측 | [[aa-lcr]] 35.0%×1.0 |
| 지시 따르기 | 38.5 | -0.76 | 실측 | [[ifbench]] 36.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
