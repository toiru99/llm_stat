---
type: Model
title: Qwen3 VL 235B A22B
creator: Alibaba
license: Open
intelligence_index: 13.0
price_blended_usd_1m: 0.294
output_speed_tps: None
context_window: 262000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 40.0, z: -0.15, r: 47.8, estimated: false }  # 전문 지식
  reasoning: { s: 32.1, z: -0.23, r: 46.5, estimated: false }  # 추론
  coding: { s: 16.7, z: -0.72, r: 39.2, estimated: false }  # 코딩
  agentic: { s: 16.7, z: -0.63, r: 40.6, estimated: false }  # 에이전트
  trust: { s: 13.4, z: -0.63, r: 40.6, estimated: false }  # 신뢰성
  multimodal: { s: 74.0, z: 0.09, r: 51.4, estimated: false }  # 멀티모달
  long_context: { s: 71.9, z: 0.57, r: 58.6, estimated: false }  # 긴문맥
  instruction: { s: 62.0, z: 0.32, r: 54.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 VL 235B A22B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Qwen3 VL 235B A22B

Alibaba · Open · Large · 컨텍스트 262k · 종합지능 **13.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 신뢰성, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $0.294/1M · None t/s · TTFT Nones · 262k ctx` · 가성비 44.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.8 | -0.15 | 실측 | [[aa-omniscience]] 21.0%×1.0, [[gpqa-diamond]] 77.0%×0.4, [[humanitys-last-exam]] 12.0%×0.3 |
| 추론 | 46.5 | -0.23 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 77.0%×1.0, [[humanitys-last-exam]] 12.0%×1.0 |
| 코딩 | 39.2 | -0.72 | 실측 | [[terminal-bench]] 11.0%×0.5 |
| 에이전트 | 40.6 | -0.63 | 실측 | [[terminal-bench]] 11.0%×1.0 |
| 신뢰성 | 40.6 | -0.63 | 실측 | [[aa-omniscience]] 15.0%×1.0 |
| 멀티모달 | 51.4 | +0.09 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 58.6 | +0.57 | 실측 | [[aa-lcr]] 64.0%×1.0 |
| 지시 따르기 | 54.8 | +0.32 | 실측 | [[ifbench]] 56.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
