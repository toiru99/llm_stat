---
type: Model
title: GPT-5 (low)
creator: OpenAI
license: Proprietary
intelligence_index: 31.0
price_blended_usd_1m: 1.34
output_speed_tps: 67.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 61.0, z: 1.0, r: 65.0, estimated: false }  # 전문 지식
  reasoning: { s: 40.1, z: 0.35, r: 55.3, estimated: false }  # 추론
  coding: { s: 57.0, z: 0.46, r: 57.0, estimated: false }  # 코딩
  agentic: { s: 62.9, z: 1.04, r: 65.6, estimated: false }  # 에이전트
  trust: { s: 27.1, z: -0.04, r: 49.4, estimated: false }  # 신뢰성
  multimodal: { s: 85.5, z: 0.67, r: 60.1, estimated: false }  # 멀티모달
  long_context: { s: 77.6, z: 0.87, r: 63.0, estimated: false }  # 긴문맥
  instruction: { s: 77.5, z: 1.03, r: 65.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-11
timestamp: 2026-07-11T00:00:00Z
---

# GPT-5 (low)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **31.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.34/1M · 67.0 t/s · TTFT 6.87s · 400k ctx` · 가성비 23.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 65.0 | +1.0 | 실측 | [[aa-omniscience]] 37.0%×1.0, [[gpqa-diamond]] 81.0%×0.4, [[humanitys-last-exam]] 18.0%×0.3 |
| 추론 | 55.3 | +0.35 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 81.0%×1.0, [[humanitys-last-exam]] 18.0%×1.0 |
| 코딩 | 57.0 | +0.46 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 27.0%×0.5 |
| 에이전트 | 65.6 | +1.04 | 실측 | [[tau2-bench]] 84.0%×1.0, [[terminal-bench]] 27.0%×1.0 |
| 신뢰성 | 49.4 | -0.04 | 실측 | [[aa-omniscience]] 24.0%×1.0 |
| 멀티모달 | 60.1 | +0.67 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 63.0 | +0.87 | 실측 | [[aa-lcr]] 59.0%×1.0 |
| 지시 따르기 | 65.5 | +1.03 | 실측 | [[ifbench]] 67.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
