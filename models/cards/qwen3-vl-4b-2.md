---
type: Model
title: Qwen3 VL 4B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Tiny
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 28.2, z: -0.91, r: 36.3, estimated: false }  # 전문 지식
  reasoning: { s: 16.9, z: -0.92, r: 36.3, estimated: false }  # 추론
  coding: { s: 2.3, z: -1.27, r: 30.9, estimated: false }  # 코딩
  agentic: { s: 9.0, z: -1.23, r: 31.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 50.2, z: -1.08, r: 33.8, estimated: false }  # 멀티모달
  long_context: { s: 24.1, z: -0.87, r: 37.0, estimated: false }  # 긴문맥
  instruction: { s: 34.4, z: -0.81, r: 37.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 VL 4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Qwen3 VL 4B

Alibaba · Open · Tiny · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.3 | -0.91 | 실측 | [[gpqa-diamond]] 49.3939393939394%×0.4, [[humanitys-last-exam]] 4.5875810936051895%×0.3 |
| 추론 | 36.3 | -0.92 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 49.3939393939394%×1.0, [[humanitys-last-exam]] 4.5875810936051895%×1.0 |
| 코딩 | 30.9 | -1.27 | 실측 | [[terminal-bench]] 1.51515151515152%×0.5 |
| 에이전트 | 31.5 | -1.23 | 실측 | [[tau2-bench]] 15.4970760233918%×1.0, [[terminal-bench]] 1.51515151515152%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 33.8 | -1.08 | 실측 | [[mmmu-pro]] 52.0231213872832%×1.0 |
| 긴문맥 | 37.0 | -0.87 | 실측 | [[aa-lcr]] 21.3333333333333%×1.0 |
| 지시 따르기 | 37.9 | -0.81 | 실측 | [[ifbench]] 36.5986394557823%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
