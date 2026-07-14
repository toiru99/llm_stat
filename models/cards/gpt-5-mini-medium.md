---
type: Model
title: GPT-5 mini (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 31.0
price_blended_usd_1m: 0.27
output_speed_tps: 95.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 44.9, z: 0.22, r: 53.3, estimated: false }  # 전문 지식
  reasoning: { s: 37.8, z: 0.23, r: 53.4, estimated: false }  # 추론
  coding: { s: 60.2, z: 0.6, r: 59.0, estimated: false }  # 코딩
  agentic: { s: 57.8, z: 0.85, r: 62.7, estimated: false }  # 에이전트
  trust: { s: 67.1, z: 1.85, r: 77.8, estimated: false }  # 신뢰성
  multimodal: { s: 78.3, z: 0.33, r: 54.9, estimated: false }  # 멀티모달
  long_context: { s: 86.8, z: 1.14, r: 67.1, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 1.27, r: 69.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 mini (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-14
timestamp: 2026-07-14T00:00:00Z
---

# GPT-5 mini (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **31.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.25 · 출력 $2.0 · 혼합 $0.27/1M · 95.0 t/s · TTFT 12.72s · 400k ctx` · 가성비 114.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.3 | +0.22 | 실측 | [[aa-omniscience]] 22.0%×1.0, [[gpqa-diamond]] 80.0%×0.4, [[humanitys-last-exam]] 15.0%×0.3 |
| 추론 | 53.4 | +0.23 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 80.0%×1.0, [[humanitys-last-exam]] 15.0%×1.0 |
| 코딩 | 59.0 | +0.6 | 실측 | [[scicode]] 41.0%×1.0, [[terminal-bench]] 29.0%×0.5 |
| 에이전트 | 62.7 | +0.85 | 실측 | [[tau2-bench]] 71.0%×1.0, [[terminal-bench]] 29.0%×1.0 |
| 신뢰성 | 77.8 | +1.85 | 실측 | [[aa-omniscience]] 58.0%×1.0 |
| 멀티모달 | 54.9 | +0.33 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 67.1 | +1.14 | 실측 | [[aa-lcr]] 66.0%×1.0 |
| 지시 따르기 | 69.1 | +1.27 | 실측 | [[ifbench]] 71.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
