---
type: Model
title: GPT-5.1
creator: OpenAI
license: Proprietary
intelligence_index: 21.0
price_blended_usd_1m: 1.3375
output_speed_tps: 101.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 42.2, z: 0.07, r: 51.0, estimated: false }  # 전문 지식
  reasoning: { s: 23.9, z: -0.54, r: 41.9, estimated: false }  # 추론
  coding: { s: 51.6, z: 0.18, r: 52.7, estimated: false }  # 코딩
  agentic: { s: 40.7, z: 0.2, r: 52.9, estimated: false }  # 에이전트
  trust: { s: 8.1, z: -0.83, r: 37.5, estimated: false }  # 신뢰성
  multimodal: { s: 67.1, z: -0.22, r: 46.6, estimated: false }  # 멀티모달
  long_context: { s: 53.0, z: 0.11, r: 51.7, estimated: false }  # 긴문맥
  instruction: { s: 43.7, z: -0.41, r: 43.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-10
timestamp: 2026-08-10T00:00:00Z
---

# GPT-5.1

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **21.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.3375/1M · 101.0 t/s · TTFT 1.11s · 400k ctx` · 가성비 15.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.0 | +0.07 | 실측 | [[aa-omniscience]] 29.0%×1.0, [[gpqa-diamond]] 64.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 41.9 | -0.54 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 64.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 52.7 | +0.18 | 실측 | [[scicode]] 36.0%×1.0, [[terminal-bench]] 23.0%×0.5 |
| 에이전트 | 52.9 | +0.2 | 실측 | [[tau2-bench]] 46.0%×1.0, [[terminal-bench]] 23.0%×1.0 |
| 신뢰성 | 37.5 | -0.83 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 46.6 | -0.22 | 실측 | [[mmmu-pro]] 62.0%×1.0 |
| 긴문맥 | 51.7 | +0.11 | 실측 | [[aa-lcr]] 44.0%×1.0 |
| 지시 따르기 | 43.8 | -0.41 | 실측 | [[ifbench]] 43.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
