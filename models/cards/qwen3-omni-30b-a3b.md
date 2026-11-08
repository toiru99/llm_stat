---
type: Model
title: Qwen3 Omni 30B A3B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.322
output_speed_tps: None
context_window: 66000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 46.0, z: -0.15, r: 47.8, estimated: false }  # 전문 지식
  reasoning: { s: 41.6, z: -0.17, r: 47.4, estimated: false }  # 추론
  coding: { s: 5.8, z: -1.06, r: 34.2, estimated: false }  # 코딩
  agentic: { s: 5.8, z: -0.98, r: 35.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 60.8, z: -0.53, r: 42.0, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.58, r: 26.3, estimated: false }  # 긴문맥
  instruction: { s: 44.0, z: -0.38, r: 44.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Omni 30B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# Qwen3 Omni 30B A3B

Alibaba · Open · Small · 컨텍스트 66k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $0.25 · 출력 $0.97 · 혼합 $0.322/1M · None t/s · TTFT Nones · 66k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.8 | -0.15 | 실측 | [[gpqa-diamond]] 72.6%×0.4, [[humanitys-last-exam]] 7.5%×0.3 |
| 추론 | 47.4 | -0.17 | 실측 | [[gpqa-diamond]] 72.6%×1.0, [[humanitys-last-exam]] 7.5%×1.0 |
| 코딩 | 34.2 | -1.06 | 실측 | [[terminal-bench]] 3.8%×0.5 |
| 에이전트 | 35.3 | -0.98 | 실측 | [[terminal-bench]] 3.8%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 42.0 | -0.53 | 실측 | [[mmmu-pro]] 60.0%×1.0 |
| 긴문맥 | 26.3 | -1.58 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 44.3 | -0.38 | 실측 | [[ifbench]] 43.4%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
