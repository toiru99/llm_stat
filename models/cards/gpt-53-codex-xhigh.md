---
type: Model
title: GPT-5.3 Codex (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 37.0
price_blended_usd_1m: 1.8725
output_speed_tps: 134.0
context_window: 400000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 81.4, z: 1.95, r: 79.3, estimated: false }  # 전문 지식
  reasoning: { s: 73.1, z: 1.83, r: 77.4, estimated: false }  # 추론
  coding: { s: 80.3, z: 1.68, r: 75.2, estimated: false }  # 코딩
  agentic: { s: 83.6, z: 1.77, r: 76.5, estimated: false }  # 에이전트
  trust: { s: 9.3, z: -0.72, r: 39.2, estimated: false }  # 신뢰성
  multimodal: { s: 87.5, z: 0.86, r: 62.9, estimated: false }  # 멀티모달
  long_context: { s: 93.3, z: 1.36, r: 70.4, estimated: false }  # 긴문맥
  instruction: { s: 88.7, z: 1.5, r: 72.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.3 Codex (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# GPT-5.3 Codex (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **37.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $1.75 · 출력 $14.0 · 혼합 $1.8725/1M · 134.0 t/s · TTFT 58.98s · 400k ctx` · 가성비 19.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 79.3 | +1.95 | 실측 | [[aa-omniscience]] 53.0%×1.0, [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 42.0%×0.3 |
| 추론 | 77.4 | +1.83 | 실측 | [[critpt]] 17.0%×1.0, [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 42.0%×1.0 |
| 코딩 | 75.2 | +1.68 | 실측 | [[terminal-bench]] 53.0%×0.5 |
| 에이전트 | 76.5 | +1.77 | 실측 | [[tau2-bench]] 86.0%×1.0, [[terminal-bench]] 53.0%×1.0 |
| 신뢰성 | 39.2 | -0.72 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | 62.9 | +0.86 | 실측 | [[mmmu-pro]] 78.0%×1.0 |
| 긴문맥 | 70.4 | +1.36 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 72.5 | +1.5 | 실측 | [[ifbench]] 75.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
