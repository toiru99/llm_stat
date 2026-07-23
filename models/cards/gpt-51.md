---
type: Model
title: GPT-5.1
creator: OpenAI
license: Proprietary
intelligence_index: 20.0
price_blended_usd_1m: None
output_speed_tps: 96.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 43.9, z: 0.16, r: 52.4, estimated: false }  # 전문 지식
  reasoning: { s: 24.0, z: -0.51, r: 42.4, estimated: false }  # 추론
  coding: { s: 51.6, z: 0.22, r: 53.3, estimated: false }  # 코딩
  agentic: { s: 40.7, z: 0.17, r: 52.5, estimated: false }  # 에이전트
  trust: { s: 10.3, z: -0.81, r: 37.9, estimated: false }  # 신뢰성
  multimodal: { s: 68.1, z: -0.18, r: 47.3, estimated: false }  # 멀티모달
  long_context: { s: 57.9, z: 0.26, r: 53.9, estimated: false }  # 긴문맥
  instruction: { s: 43.7, z: -0.38, r: 44.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-23
timestamp: 2026-07-23T00:00:00Z
---

# GPT-5.1

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **20.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $None/1M · 96.0 t/s · TTFT 1.03s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.4 | +0.16 | 실측 | [[aa-omniscience]] 29.0%×1.0, [[gpqa-diamond]] 64.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 42.4 | -0.51 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 64.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 53.3 | +0.22 | 실측 | [[scicode]] 36.0%×1.0, [[terminal-bench]] 23.0%×0.5 |
| 에이전트 | 52.5 | +0.17 | 실측 | [[tau2-bench]] 46.0%×1.0, [[terminal-bench]] 23.0%×1.0 |
| 신뢰성 | 37.9 | -0.81 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | 47.3 | -0.18 | 실측 | [[mmmu-pro]] 62.0%×1.0 |
| 긴문맥 | 53.9 | +0.26 | 실측 | [[aa-lcr]] 44.0%×1.0 |
| 지시 따르기 | 44.3 | -0.38 | 실측 | [[ifbench]] 43.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
