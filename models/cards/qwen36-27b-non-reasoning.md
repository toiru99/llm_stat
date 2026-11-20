---
type: Model
title: Qwen3.6 27B (non-reasoning)
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.9
output_speed_tps: 52.5736218473241
context_window: 262144
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 56.5, z: 0.44, r: 56.7, estimated: false }  # 전문 지식
  reasoning: { s: 35.4, z: -0.01, r: 49.8, estimated: false }  # 추론
  coding: { s: 32.2, z: -0.27, r: 46.0, estimated: false }  # 코딩
  agentic: { s: 51.2, z: 0.22, r: 53.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 76.3, z: 0.25, r: 53.8, estimated: false }  # 멀티모달
  long_context: { s: 75.2, z: 0.64, r: 59.6, estimated: false }  # 긴문맥
  instruction: { s: 47.2, z: -0.28, r: 45.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.6 27B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# Qwen3.6 27B (non-reasoning)

Alibaba · Open · Small · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $0.6 · 출력 $3.6 · 혼합 $0.9/1M · 52.5736218473241 t/s · TTFT 7.17282541112499s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.7 | +0.44 | 실측 | [[gpqa-diamond]] 82.9292929292929%×0.4, [[humanitys-last-exam]] 15.060240963855401%×0.3 |
| 추론 | 49.8 | -0.01 | 실측 | [[critpt]] 0.857142857142857%×1.0, [[gpqa-diamond]] 82.9292929292929%×1.0, [[humanitys-last-exam]] 15.060240963855401%×1.0 |
| 코딩 | 46.0 | -0.27 | 실측 | [[terminal-bench]] 21.2121212121212%×0.5 |
| 에이전트 | 53.3 | +0.22 | 실측 | [[gdpval]] 969.03%×1.0, [[tau2-bench]] 93.56725146198829%×1.0, [[tau3-banking]] 9.27835051546392%×1.0, [[terminal-bench]] 21.2121212121212%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 53.8 | +0.25 | 실측 | [[mmmu-pro]] 71.73410404624279%×1.0 |
| 긴문맥 | 59.6 | +0.64 | 실측 | [[aa-lcr]] 66.6666666666667%×1.0 |
| 지시 따르기 | 45.8 | -0.28 | 실측 | [[ifbench]] 45.7142857142857%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
