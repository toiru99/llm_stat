---
type: Model
title: Qwen3 4B
creator: Alibaba
license: Open
intelligence_index: 8.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32000
status: past
size_class: Tiny
params_b: 4.02
is_reasoning: false
radar:
  knowledge: { s: 31.0, z: -0.47, r: 43.0, estimated: false }  # 전문 지식
  reasoning: { s: 27.8, z: -0.35, r: 44.8, estimated: false }  # 추론
  coding: { s: 5.0, z: -1.76, r: 23.7, estimated: false }  # 코딩
  agentic: { s: 19.2, z: -0.66, r: 40.1, estimated: false }  # 에이전트
  trust: { s: 11.2, z: -0.69, r: 39.6, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.49, r: 27.6, estimated: false }  # 긴문맥
  instruction: { s: 29.6, z: -0.99, r: 35.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-08
timestamp: 2026-08-08T00:00:00Z
---

# Qwen3 4B

Alibaba · Open · Tiny(4.02B) · 컨텍스트 32k · 종합지능 **8.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.0 | -0.47 | 실측 | [[gpqa-diamond]] 52.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 44.8 | -0.35 | 실측 | [[gpqa-diamond]] 52.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 23.7 | -1.76 | 실측 | [[scicode]] 3.0%×1.0 |
| 에이전트 | 40.1 | -0.66 | 실측 | [[tau2-bench]] 19.0%×1.0 |
| 신뢰성 | 39.6 | -0.69 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 27.6 | -1.49 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 35.1 | -0.99 | 실측 | [[ifbench]] 33.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
