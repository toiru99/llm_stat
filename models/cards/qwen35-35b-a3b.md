---
type: Model
title: Qwen3.5 35B A3B
creator: Alibaba
license: Open
intelligence_index: 23.0
price_blended_usd_1m: 0.42
output_speed_tps: 194.0
context_window: 262000
radar:
  knowledge: { s: 38.9, z: -0.56, r: 41.6, estimated: false }  # 전문 지식
  reasoning: { s: 37.3, z: -0.34, r: 44.9, estimated: false }  # 추론
  coding: { s: 38.0, z: -0.92, r: 36.2, estimated: false }  # 코딩
  agentic: { s: 52.2, z: 0.01, r: 50.2, estimated: false }  # 에이전트
  trust: { s: 5.0, z: -1.01, r: 34.8, estimated: false }  # 신뢰성
  multimodal: { s: 74.1, z: -0.03, r: 49.5, estimated: false }  # 멀티모달
  long_context: { s: 74.3, z: 0.13, r: 52.0, estimated: false }  # 긴문맥
  instruction: { s: 45.1, z: -0.91, r: 36.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 35B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-25
timestamp: 2026-06-25T00:00:00Z
---

# Qwen3.5 35B A3B

Alibaba · Open · 컨텍스트 262k · 종합지능 **23.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $0.25 · 출력 $2.0 · 혼합 $0.42/1M · 194.0 t/s · TTFT 2.23s · 262k ctx` · 가성비 54.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.6 | -0.56 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 82.0%×0.4, [[humanitys-last-exam]] 13.0%×0.3 |
| 추론 | 44.9 | -0.34 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 82.0%×1.0, [[humanitys-last-exam]] 13.0%×1.0 |
| 코딩 | 36.2 | -0.92 | 실측 | [[scicode]] 29.0%×1.0, [[terminal-bench]] 11.0%×0.5 |
| 에이전트 | 50.2 | +0.01 | 실측 | [[tau2-bench]] 86.0%×1.0, [[terminal-bench]] 11.0%×1.0 |
| 신뢰성 | 34.8 | -1.01 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | 49.5 | -0.03 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 52.0 | +0.13 | 실측 | [[aa-lcr]] 55.0%×1.0 |
| 지시 따르기 | 36.3 | -0.91 | 실측 | [[ifbench]] 44.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
