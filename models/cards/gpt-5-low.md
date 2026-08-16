---
type: Model
title: GPT-5 (low)
creator: OpenAI
license: Proprietary
intelligence_index: 32.0
price_blended_usd_1m: 1.3375
output_speed_tps: 63.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 59.9, z: 0.89, r: 63.3, estimated: false }  # 전문 지식
  reasoning: { s: 40.6, z: 0.26, r: 53.9, estimated: false }  # 추론
  coding: { s: 57.0, z: 0.36, r: 55.4, estimated: false }  # 코딩
  agentic: { s: 62.9, z: 1.04, r: 65.5, estimated: false }  # 에이전트
  trust: { s: 22.1, z: -0.22, r: 46.7, estimated: false }  # 신뢰성
  multimodal: { s: 84.3, z: 0.58, r: 58.6, estimated: false }  # 멀티모달
  long_context: { s: 77.1, z: 0.81, r: 62.1, estimated: false }  # 긴문맥
  instruction: { s: 77.5, z: 0.94, r: 64.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-16
timestamp: 2026-08-16T00:00:00Z
---

# GPT-5 (low)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **32.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.3375/1M · 63.0 t/s · TTFT 10.13s · 400k ctx` · 가성비 23.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.3 | +0.89 | 실측 | [[aa-omniscience]] 38.0%×1.0, [[gpqa-diamond]] 81.0%×0.4, [[humanitys-last-exam]] 20.0%×0.3 |
| 추론 | 53.9 | +0.26 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 81.0%×1.0, [[humanitys-last-exam]] 20.0%×1.0 |
| 코딩 | 55.4 | +0.36 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 27.0%×0.5 |
| 에이전트 | 65.5 | +1.04 | 실측 | [[tau2-bench]] 84.0%×1.0, [[terminal-bench]] 27.0%×1.0 |
| 신뢰성 | 46.7 | -0.22 | 실측 | [[aa-omniscience]] 21.0%×1.0 |
| 멀티모달 | 58.6 | +0.58 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 62.1 | +0.81 | 실측 | [[aa-lcr]] 64.0%×1.0 |
| 지시 따르기 | 64.2 | +0.94 | 실측 | [[ifbench]] 67.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
