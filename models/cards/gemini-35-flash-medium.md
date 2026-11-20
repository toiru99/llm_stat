---
type: Model
title: Gemini 3.5 Flash (medium)
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.305
output_speed_tps: 172.259458421465
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 78.0, z: 1.48, r: 72.2, estimated: false }  # 전문 지식
  reasoning: { s: 60.2, z: 1.21, r: 68.2, estimated: false }  # 추론
  coding: { s: 59.8, z: 0.67, r: 60.1, estimated: false }  # 코딩
  agentic: { s: 78.1, z: 1.15, r: 67.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 92.5, z: 1.08, r: 66.2, estimated: false }  # 멀티모달
  long_context: { s: 83.8, z: 0.9, r: 63.5, estimated: false }  # 긴문맥
  instruction: { s: 87.7, z: 1.41, r: 71.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.5 Flash (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# Gemini 3.5 Flash (medium)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 지시 따르기
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $1.5 · 출력 $9.0 · 혼합 $1.305/1M · 172.259458421465 t/s · TTFT 10.6696080156215s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 72.2 | +1.48 | 실측 | [[gpqa-diamond]] 92.12121212121211%×0.4, [[humanitys-last-exam]] 41.3345690454124%×0.3 |
| 추론 | 68.2 | +1.21 | 실측 | [[critpt]] 10.8571428571429%×1.0, [[gpqa-diamond]] 92.12121212121211%×1.0, [[humanitys-last-exam]] 41.3345690454124%×1.0 |
| 코딩 | 60.1 | +0.67 | 실측 | [[terminal-bench]] 39.3939393939394%×0.5 |
| 에이전트 | 67.2 | +1.15 | 실측 | [[tau2-bench]] 95.6140350877193%×1.0, [[terminal-bench]] 39.3939393939394%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 66.2 | +1.08 | 실측 | [[mmmu-pro]] 83.8728323699422%×1.0 |
| 긴문맥 | 63.5 | +0.9 | 실측 | [[aa-lcr]] 74.3333333333333%×1.0 |
| 지시 따르기 | 71.2 | +1.41 | 실측 | [[ifbench]] 74.5578231292517%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
