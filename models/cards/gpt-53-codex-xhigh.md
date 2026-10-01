---
type: Model
title: GPT-5.3 Codex (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 33.0
price_blended_usd_1m: 1.8725
output_speed_tps: 85.0
context_window: 400000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 81.0, z: 1.78, r: 76.7, estimated: false }  # 전문 지식
  reasoning: { s: 72.3, z: 1.63, r: 74.4, estimated: false }  # 추론
  coding: { s: 80.3, z: 1.51, r: 72.6, estimated: false }  # 코딩
  agentic: { s: 83.6, z: 1.72, r: 75.8, estimated: false }  # 에이전트
  trust: { s: 9.3, z: -0.81, r: 37.9, estimated: false }  # 신뢰성
  multimodal: { s: 86.3, z: 0.75, r: 61.2, estimated: false }  # 멀티모달
  long_context: { s: 93.3, z: 1.26, r: 68.9, estimated: false }  # 긴문맥
  instruction: { s: 88.7, z: 1.43, r: 71.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.3 Codex (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-01
timestamp: 2026-10-01T00:00:00Z
---

# GPT-5.3 Codex (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **33.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 에이전트
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $1.75 · 출력 $14.0 · 혼합 $1.8725/1M · 85.0 t/s · TTFT 69.43s · 400k ctx` · 가성비 17.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 76.7 | +1.78 | 실측 | [[aa-omniscience]] 53.0%×1.0, [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 42.0%×0.3 |
| 추론 | 74.4 | +1.63 | 실측 | [[critpt]] 17.0%×1.0, [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 42.0%×1.0 |
| 코딩 | 72.6 | +1.51 | 실측 | [[terminal-bench]] 53.0%×0.5 |
| 에이전트 | 75.8 | +1.72 | 실측 | [[tau2-bench]] 86.0%×1.0, [[terminal-bench]] 53.0%×1.0 |
| 신뢰성 | 37.9 | -0.81 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | 61.2 | +0.75 | 실측 | [[mmmu-pro]] 78.0%×1.0 |
| 긴문맥 | 68.9 | +1.26 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 71.4 | +1.43 | 실측 | [[ifbench]] 75.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
