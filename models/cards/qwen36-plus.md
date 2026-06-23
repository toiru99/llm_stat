---
type: Model
title: Qwen3.6 Plus
creator: Alibaba
license: Proprietary
intelligence_index: 40.0
price_blended_usd_1m: 0.43
output_speed_tps: 53.0
context_window: 1000000
radar:
  knowledge: { s: 54.8, z: 0.16, r: 52.3, estimated: false }  # 전문 지식
  reasoning: { s: 50.2, z: 0.27, r: 54.0, estimated: false }  # 추론
  coding: { s: 68.8, z: 0.41, r: 56.1, estimated: false }  # 코딩
  agentic: { s: 64.9, z: 0.52, r: 57.7, estimated: false }  # 에이전트
  trust: { s: 80.0, z: 1.63, r: 74.4, estimated: false }  # 신뢰성
  multimodal: { s: 89.7, z: 0.75, r: 61.2, estimated: false }  # 멀티모달
  long_context: { s: 94.6, z: 0.86, r: 62.9, estimated: false }  # 긴문맥
  instruction: { s: 88.7, z: 0.91, r: 63.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.6 Plus
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-23
timestamp: 2026-06-23T00:00:00Z
---

# Qwen3.6 Plus

Alibaba · Proprietary · 컨텍스트 1M · 종합지능 **40.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.5 · 출력 $3.0 · 혼합 $0.43/1M · 53.0 t/s · TTFT 2.55s · 1M ctx` · 가성비 93.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.3 | +0.16 | 실측 | [[aa-omniscience]] 26.0%×1.0, [[gpqa-diamond]] 88.0%×0.4, [[humanitys-last-exam]] 26.0%×0.3 |
| 추론 | 54.0 | +0.27 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 88.0%×1.0, [[humanitys-last-exam]] 26.0%×1.0 |
| 코딩 | 56.1 | +0.41 | 실측 | [[scicode]] 41.0%×1.0, [[terminal-bench]] 44.0%×0.5 |
| 에이전트 | 57.7 | +0.52 | 실측 | [[gdpval]] 33.0%×1.0, [[tau2-bench]] 98.0%×1.0, [[tau3-banking]] 16.0%×1.0, [[terminal-bench]] 44.0%×1.0 |
| 신뢰성 | 74.4 | +1.63 | 실측 | [[aa-omniscience]] 68.0%×1.0 |
| 멀티모달 | 61.2 | +0.75 | 실측 | [[mmmu-pro]] 78.0%×1.0 |
| 긴문맥 | 62.9 | +0.86 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 63.6 | +0.91 | 실측 | [[ifbench]] 75.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
