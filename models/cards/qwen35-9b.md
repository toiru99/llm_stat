---
type: Model
title: Qwen3.5 9B
creator: Alibaba
license: Open
intelligence_index: 25.0
price_blended_usd_1m: 0.11
output_speed_tps: 59.0
context_window: 262000
radar:
  knowledge: { s: 38.6, z: -0.57, r: 41.4, estimated: false }  # 전문 지식
  reasoning: { s: 35.8, z: -0.41, r: 43.8, estimated: false }  # 추론
  coding: { s: 43.8, z: -0.67, r: 39.9, estimated: false }  # 코딩
  agentic: { s: 44.7, z: -0.27, r: 45.9, estimated: false }  # 에이전트
  trust: { s: 18.8, z: -0.53, r: 42.1, estimated: false }  # 신뢰성
  multimodal: { s: 74.1, z: -0.05, r: 49.2, estimated: false }  # 멀티모달
  long_context: { s: 79.7, z: 0.33, r: 54.9, estimated: false }  # 긴문맥
  instruction: { s: 77.5, z: 0.44, r: 56.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 9B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-28
timestamp: 2026-06-28T00:00:00Z
---

# Qwen3.5 9B

Alibaba · Open · 컨텍스트 262k · 종합지능 **25.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 전문 지식, 코딩

## 실용 지표
`입력 $0.1 · 출력 $0.15 · 혼합 $0.11/1M · 59.0 t/s · TTFT 1.09s · 262k ctx` · 가성비 227.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.4 | -0.57 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 81.0%×0.4, [[humanitys-last-exam]] 13.0%×0.3 |
| 추론 | 43.8 | -0.41 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 81.0%×1.0, [[humanitys-last-exam]] 13.0%×1.0 |
| 코딩 | 39.9 | -0.67 | 실측 | [[scicode]] 28.0%×1.0, [[terminal-bench]] 24.0%×0.5 |
| 에이전트 | 45.9 | -0.27 | 실측 | [[tau2-bench]] 87.0%×1.0, [[tau3-banking]] 8.0%×1.0, [[terminal-bench]] 24.0%×1.0 |
| 신뢰성 | 42.1 | -0.53 | 실측 | [[aa-omniscience]] 19.0%×1.0 |
| 멀티모달 | 49.2 | -0.05 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 54.9 | +0.33 | 실측 | [[aa-lcr]] 59.0%×1.0 |
| 지시 따르기 | 56.6 | +0.44 | 실측 | [[ifbench]] 67.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
