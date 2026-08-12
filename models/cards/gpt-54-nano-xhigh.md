---
type: Model
title: GPT-5.4 nano (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 40.0
price_blended_usd_1m: 0.179
output_speed_tps: 154.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 52.0, z: 0.54, r: 58.1, estimated: false }  # 전문 지식
  reasoning: { s: 54.6, z: 0.98, r: 64.7, estimated: false }  # 추론
  coding: { s: 73.4, z: 1.08, r: 66.2, estimated: false }  # 코딩
  agentic: { s: 55.4, z: 0.77, r: 61.6, estimated: false }  # 에이전트
  trust: { s: 27.9, z: 0.08, r: 51.2, estimated: false }  # 신뢰성
  multimodal: { s: 71.4, z: -0.02, r: 49.7, estimated: false }  # 멀티모달
  long_context: { s: 86.7, z: 1.13, r: 67.0, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 1.5, r: 72.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 nano (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-12
timestamp: 2026-08-12T00:00:00Z
---

# GPT-5.4 nano (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **40.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 신뢰성, 멀티모달

## 실용 지표
`입력 $0.2 · 출력 $1.25 · 혼합 $0.179/1M · 154.0 t/s · TTFT 3.8s · 400k ctx` · 가성비 223.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 58.1 | +0.54 | 실측 | [[aa-omniscience]] 26.0%×1.0, [[gpqa-diamond]] 82.0%×0.4, [[humanitys-last-exam]] 28.0%×0.3 |
| 추론 | 64.7 | +0.98 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 82.0%×1.0, [[humanitys-last-exam]] 28.0%×1.0 |
| 코딩 | 66.2 | +1.08 | 실측 | [[scicode]] 47.0%×1.0, [[terminal-bench]] 42.0%×0.5 |
| 에이전트 | 61.6 | +0.77 | 실측 | [[apex-agents]] 25.0%×1.0, [[gdpval]] 30.0%×1.0, [[itbench]] 24.0%×1.0, [[tau2-bench]] 76.0%×1.0, [[tau3-banking]] 27.0%×1.0, [[terminal-bench]] 42.0%×1.0 |
| 신뢰성 | 51.2 | +0.08 | 실측 | [[aa-omniscience]] 26.0%×1.0 |
| 멀티모달 | 49.7 | -0.02 | 실측 | [[mmmu-pro]] 65.0%×1.0 |
| 긴문맥 | 67.0 | +1.13 | 실측 | [[aa-lcr]] 72.0%×1.0 |
| 지시 따르기 | 72.5 | +1.5 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
