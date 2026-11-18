---
type: Model
title: Gemini 2.5 Flash
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.331
output_speed_tps: 207.36500522734
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 52.2, z: 0.24, r: 53.5, estimated: false }  # 전문 지식
  reasoning: { s: 32.8, z: -0.14, r: 47.9, estimated: false }  # 추론
  coding: { s: 20.7, z: -0.66, r: 40.2, estimated: false }  # 코딩
  agentic: { s: 26.3, z: -0.64, r: 40.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 72.8, z: 0.07, r: 51.1, estimated: false }  # 멀티모달
  long_context: { s: 73.7, z: 0.6, r: 58.9, estimated: false }  # 긴문맥
  instruction: { s: 53.6, z: -0.01, r: 49.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# Gemini 2.5 Flash

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.331/1M · 207.36500522734 t/s · TTFT 10.777663124308374s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.5 | +0.24 | 실측 | [[gpqa-diamond]] 78.989898989899%×0.4, [[humanitys-last-exam]] 12.1408711770158%×0.3 |
| 추론 | 47.9 | -0.14 | 실측 | [[critpt]] 1.1428571428571401%×1.0, [[gpqa-diamond]] 78.989898989899%×1.0, [[humanitys-last-exam]] 12.1408711770158%×1.0 |
| 코딩 | 40.2 | -0.66 | 실측 | [[terminal-bench]] 13.6363636363636%×0.5 |
| 에이전트 | 40.4 | -0.64 | 실측 | [[tau2-bench]] 31.5789473684211%×1.0, [[terminal-bench]] 13.6363636363636%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 51.1 | +0.07 | 실측 | [[mmmu-pro]] 69.0751445086705%×1.0 |
| 긴문맥 | 58.9 | +0.6 | 실측 | [[aa-lcr]] 65.3333333333333%×1.0 |
| 지시 따르기 | 49.8 | -0.01 | 실측 | [[ifbench]] 50.2721088435374%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
