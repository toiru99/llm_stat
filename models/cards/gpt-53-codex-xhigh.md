---
type: Model
title: GPT-5.3 Codex (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 44.0
price_blended_usd_1m: 1.8725
output_speed_tps: 124.0
context_window: 400000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 86.2, z: 2.11, r: 81.6, estimated: false }  # 전문 지식
  reasoning: { s: 75.2, z: 2.02, r: 80.3, estimated: false }  # 추론
  coding: { s: 85.7, z: 1.59, r: 73.8, estimated: false }  # 코딩
  agentic: { s: 83.6, z: 1.91, r: 78.7, estimated: false }  # 에이전트
  trust: { s: 13.8, z: -0.68, r: 39.7, estimated: false }  # 신뢰성
  multimodal: { s: 90.0, z: 0.88, r: 63.2, estimated: false }  # 멀티모달
  long_context: { s: 97.4, z: 1.41, r: 71.1, estimated: false }  # 긴문맥
  instruction: { s: 88.7, z: 1.46, r: 71.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.3 Codex (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# GPT-5.3 Codex (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **44.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $1.75 · 출력 $14.0 · 혼합 $1.8725/1M · 124.0 t/s · TTFT 95.2s · 400k ctx` · 가성비 23.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 81.6 | +2.11 | 실측 | [[aa-omniscience]] 52.0%×1.0, [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 40.0%×0.3 |
| 추론 | 80.3 | +2.02 | 실측 | [[critpt]] 17.0%×1.0, [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 40.0%×1.0 |
| 코딩 | 73.8 | +1.59 | 실측 | [[scicode]] 53.0%×1.0, [[terminal-bench]] 53.0%×0.5 |
| 에이전트 | 78.7 | +1.91 | 실측 | [[tau2-bench]] 86.0%×1.0, [[terminal-bench]] 53.0%×1.0 |
| 신뢰성 | 39.7 | -0.68 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | 63.2 | +0.88 | 실측 | [[mmmu-pro]] 78.0%×1.0 |
| 긴문맥 | 71.1 | +1.41 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 71.9 | +1.46 | 실측 | [[ifbench]] 75.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
