---
type: Model
title: GPT-5.4 nano (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 21.0
price_blended_usd_1m: 0.179
output_speed_tps: 164.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 50.5, z: 0.36, r: 55.5, estimated: false }  # 전문 지식
  reasoning: { s: 52.3, z: 0.72, r: 60.7, estimated: false }  # 추론
  coding: { s: 65.7, z: 1.0, r: 65.0, estimated: false }  # 코딩
  agentic: { s: 53.4, z: 0.56, r: 58.3, estimated: false }  # 에이전트
  trust: { s: 24.7, z: -0.08, r: 48.8, estimated: false }  # 신뢰성
  multimodal: { s: 68.5, z: -0.14, r: 47.8, estimated: false }  # 멀티모달
  long_context: { s: 86.5, z: 1.05, r: 65.8, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 1.49, r: 72.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 nano (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-05
timestamp: 2026-10-05T00:00:00Z
---

# GPT-5.4 nano (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **21.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 신뢰성, 멀티모달

## 실용 지표
`입력 $0.2 · 출력 $1.25 · 혼합 $0.179/1M · 164.0 t/s · TTFT 82.81s · 400k ctx` · 가성비 117.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.5 | +0.36 | 실측 | [[aa-omniscience]] 26.0%×1.0, [[gpqa-diamond]] 82.0%×0.4, [[humanitys-last-exam]] 28.0%×0.3 |
| 추론 | 60.7 | +0.72 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 82.0%×1.0, [[humanitys-last-exam]] 28.0%×1.0 |
| 코딩 | 65.0 | +1.0 | 실측 | [[scicode]] 47.0%×1.0, [[terminal-bench]] 42.0%×0.5 |
| 에이전트 | 58.3 | +0.56 | 실측 | [[apex-agents]] 25.0%×1.0, [[gdpval]] 22.0%×1.0, [[itbench]] 24.0%×1.0, [[tau2-bench]] 76.0%×1.0, [[tau3-banking]] 27.0%×1.0, [[terminal-bench]] 42.0%×1.0 |
| 신뢰성 | 48.8 | -0.08 | 실측 | [[aa-omniscience]] 26.0%×1.0 |
| 멀티모달 | 47.8 | -0.14 | 실측 | [[mmmu-pro]] 65.0%×1.0 |
| 긴문맥 | 65.8 | +1.05 | 실측 | [[aa-lcr]] 77.0%×1.0 |
| 지시 따르기 | 72.4 | +1.49 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
