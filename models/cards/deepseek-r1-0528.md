---
type: Model
title: DeepSeek R1 0528
creator: DeepSeek
license: Open
intelligence_index: 20.0
price_blended_usd_1m: 1.64
output_speed_tps: None
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 54.1, z: 0.67, r: 60.0, estimated: false }  # 전문 지식
  reasoning: { s: 38.2, z: 0.25, r: 53.8, estimated: false }  # 추론
  coding: { s: 52.5, z: 0.28, r: 54.1, estimated: false }  # 코딩
  agentic: { s: 30.8, z: -0.21, r: 46.9, estimated: false }  # 에이전트
  trust: { s: 17.6, z: -0.48, r: 42.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 72.4, z: 0.71, r: 60.7, estimated: false }  # 긴문맥
  instruction: { s: 39.4, z: -0.53, r: 42.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek R1 0528
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-11
timestamp: 2026-07-11T00:00:00Z
---

# DeepSeek R1 0528

DeepSeek · Open · Unknown · 컨텍스트 128k · 종합지능 **20.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 신뢰성, 지시 따르기

## 실용 지표
`입력 $1.35 · 출력 $4.2 · 혼합 $1.64/1M · None t/s · TTFT Nones · 128k ctx` · 가성비 12.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.0 | +0.67 | 실측 | [[aa-omniscience]] 31.0%×1.0, [[gpqa-diamond]] 81.0%×0.4, [[humanitys-last-exam]] 15.0%×0.3 |
| 추론 | 53.8 | +0.25 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 81.0%×1.0, [[humanitys-last-exam]] 15.0%×1.0 |
| 코딩 | 54.1 | +0.28 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 16.0%×0.5 |
| 에이전트 | 46.9 | -0.21 | 실측 | [[tau2-bench]] 37.0%×1.0, [[terminal-bench]] 16.0%×1.0 |
| 신뢰성 | 42.8 | -0.48 | 실측 | [[aa-omniscience]] 16.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 60.7 | +0.71 | 실측 | [[aa-lcr]] 55.0%×1.0 |
| 지시 따르기 | 42.0 | -0.53 | 실측 | [[ifbench]] 40.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
