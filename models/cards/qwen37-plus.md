---
type: Model
title: Qwen3.7 Plus
creator: Alibaba
license: Proprietary
intelligence_index: 39.0
price_blended_usd_1m: 0.25
output_speed_tps: 48.0
context_window: 1000000
radar:
  knowledge: { s: 53.8, z: 0.12, r: 51.8, estimated: false }  # 전문 지식
  reasoning: { s: 61.9, z: 0.83, r: 62.5, estimated: false }  # 추론
  coding: { s: 74.9, z: 0.67, r: 60.0, estimated: false }  # 코딩
  agentic: { s: 59.4, z: 0.34, r: 55.1, estimated: false }  # 에이전트
  trust: { s: 88.8, z: 1.95, r: 79.3, estimated: false }  # 신뢰성
  multimodal: { s: 93.1, z: 0.91, r: 63.6, estimated: false }  # 멀티모달
  long_context: { s: 87.8, z: 0.62, r: 59.3, estimated: false }  # 긴문맥
  instruction: { s: 93.0, z: 1.09, r: 66.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.7 Plus
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-30
timestamp: 2026-06-30T00:00:00Z
---

# Qwen3.7 Plus

Alibaba · Proprietary · 컨텍스트 1M · 종합지능 **39.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 에이전트, 전문 지식

## 실용 지표
`입력 $0.4 · 출력 $1.16 · 혼합 $0.25/1M · 48.0 t/s · TTFT 2.78s · 1M ctx` · 가성비 156.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.8 | +0.12 | 실측 | [[aa-omniscience]] 22.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 33.0%×0.3 |
| 추론 | 62.5 | +0.83 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 33.0%×1.0 |
| 코딩 | 60.0 | +0.67 | 실측 | [[scicode]] 45.0%×1.0, [[terminal-bench]] 47.0%×0.5 |
| 에이전트 | 55.1 | +0.34 | 실측 | [[apex-agents]] 22.0%×1.0, [[gdpval]] 22.0%×1.0, [[tau2-bench]] 93.0%×1.0, [[tau3-banking]] 18.0%×1.0, [[terminal-bench]] 47.0%×1.0 |
| 신뢰성 | 79.3 | +1.95 | 실측 | [[aa-omniscience]] 75.0%×1.0 |
| 멀티모달 | 63.6 | +0.91 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 59.3 | +0.62 | 실측 | [[aa-lcr]] 65.0%×1.0 |
| 지시 따르기 | 66.4 | +1.09 | 실측 | [[ifbench]] 78.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
