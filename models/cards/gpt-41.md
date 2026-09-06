---
type: Model
title: GPT-4.1
creator: OpenAI
license: Proprietary
intelligence_index: 13.0
price_blended_usd_1m: 1.55
output_speed_tps: 168.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 41.1, z: 0.01, r: 50.1, estimated: false }  # 전문 지식
  reasoning: { s: 23.8, z: -0.54, r: 41.9, estimated: false }  # 추론
  coding: { s: 21.2, z: -0.38, r: 44.3, estimated: false }  # 코딩
  agentic: { s: 34.3, z: -0.12, r: 48.2, estimated: false }  # 에이전트
  trust: { s: 5.2, z: -0.91, r: 36.3, estimated: false }  # 신뢰성
  multimodal: { s: 63.9, z: -0.31, r: 45.3, estimated: false }  # 멀티모달
  long_context: { s: 76.4, z: 0.84, r: 62.6, estimated: false }  # 긴문맥
  instruction: { s: 43.7, z: -0.38, r: 44.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# GPT-4.1

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **13.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $8.0 · 혼합 $1.55/1M · 168.0 t/s · TTFT 1.0s · 1M ctx` · 가성비 8.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.1 | +0.01 | 실측 | [[aa-omniscience]] 28.0%×1.0, [[gpqa-diamond]] 67.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 41.9 | -0.54 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 67.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 44.3 | -0.38 | 실측 | [[terminal-bench]] 14.0%×0.5 |
| 에이전트 | 48.2 | -0.12 | 실측 | [[tau2-bench]] 47.0%×1.0, [[terminal-bench]] 14.0%×1.0 |
| 신뢰성 | 36.3 | -0.91 | 실측 | [[aa-omniscience]] 7.0%×1.0 |
| 멀티모달 | 45.3 | -0.31 | 실측 | [[mmmu-pro]] 61.0%×1.0 |
| 긴문맥 | 62.6 | +0.84 | 실측 | [[aa-lcr]] 68.0%×1.0 |
| 지시 따르기 | 44.3 | -0.38 | 실측 | [[ifbench]] 43.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
