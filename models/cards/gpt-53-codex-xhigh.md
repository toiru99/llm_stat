---
type: Model
title: GPT-5.3 Codex (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 44.0
price_blended_usd_1m: 1.87
output_speed_tps: 77.0
context_window: 400000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 86.2, z: 2.22, r: 83.4, estimated: false }  # 전문 지식
  reasoning: { s: 75.2, z: 2.21, r: 83.2, estimated: false }  # 추론
  coding: { s: 85.7, z: 1.68, r: 75.2, estimated: false }  # 코딩
  agentic: { s: 83.6, z: 1.84, r: 77.7, estimated: false }  # 에이전트
  trust: { s: 14.1, z: -0.65, r: 40.3, estimated: false }  # 신뢰성
  multimodal: { s: 91.3, z: 0.95, r: 64.2, estimated: false }  # 멀티모달
  long_context: { s: 97.4, z: 1.45, r: 71.8, estimated: false }  # 긴문맥
  instruction: { s: 88.7, z: 1.5, r: 72.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.3 Codex (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-11
timestamp: 2026-07-11T00:00:00Z
---

# GPT-5.3 Codex (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **44.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $1.75 · 출력 $14.0 · 혼합 $1.87/1M · 77.0 t/s · TTFT 79.01s · 400k ctx` · 가성비 23.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 83.4 | +2.22 | 실측 | [[aa-omniscience]] 52.0%×1.0, [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 40.0%×0.3 |
| 추론 | 83.2 | +2.21 | 실측 | [[critpt]] 17.0%×1.0, [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 40.0%×1.0 |
| 코딩 | 75.2 | +1.68 | 실측 | [[scicode]] 53.0%×1.0, [[terminal-bench]] 53.0%×0.5 |
| 에이전트 | 77.7 | +1.84 | 실측 | [[tau2-bench]] 86.0%×1.0, [[terminal-bench]] 53.0%×1.0 |
| 신뢰성 | 40.3 | -0.65 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | 64.2 | +0.95 | 실측 | [[mmmu-pro]] 78.0%×1.0 |
| 긴문맥 | 71.8 | +1.45 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 72.4 | +1.5 | 실측 | [[ifbench]] 75.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
