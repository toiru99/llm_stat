---
type: Model
title: Grok 4.3 (medium)
creator: SpaceXAI
license: Proprietary
intelligence_index: 36.0
price_blended_usd_1m: 0.64
output_speed_tps: 99.0
context_window: 1000000
radar:
  knowledge: { s: 57.7, z: 0.07, r: 51.0, estimated: false }  # 전문 지식
  reasoning: { s: 53.8, z: 0.22, r: 53.3, estimated: false }  # 추론
  coding: { s: 65.2, z: 0.05, r: 50.7, estimated: false }  # 코딩
  agentic: { s: 68.7, z: 0.57, r: 58.5, estimated: false }  # 에이전트
  trust: { s: 100.0, z: 2.39, r: 85.9, estimated: false }  # 신뢰성
  multimodal: { s: 86.2, z: 0.4, r: 56.0, estimated: false }  # 멀티모달
  long_context: { s: 87.8, z: 0.51, r: 57.7, estimated: false }  # 긴문맥
  instruction: { s: 100.0, z: 1.39, r: 70.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.3 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# Grok 4.3 (medium)

SpaceXAI · Proprietary · 컨텍스트 1M · 종합지능 **36.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 전문 지식, 코딩

## 실용 지표
`입력 $1.25 · 출력 $2.5 · 혼합 $0.64/1M · 99.0 t/s · TTFT 13.2s · 1M ctx` · 가성비 56.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.0 | +0.07 | 실측 | [[aa-omniscience]] 28.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 28.0%×0.3 |
| 추론 | 53.3 | +0.22 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 28.0%×1.0 |
| 코딩 | 50.7 | +0.05 | 실측 | [[scicode]] 45.0%×1.0, [[terminal-bench]] 30.0%×0.5 |
| 에이전트 | 58.5 | +0.57 | 실측 | [[tau2-bench]] 91.0%×1.0, [[terminal-bench]] 30.0%×1.0 |
| 신뢰성 | 85.9 | +2.39 | 실측 | [[aa-omniscience]] 84.0%×1.0 |
| 멀티모달 | 56.0 | +0.4 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 57.7 | +0.51 | 실측 | [[aa-lcr]] 65.0%×1.0 |
| 지시 따르기 | 70.9 | +1.39 | 실측 | [[ifbench]] 83.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
