---
type: Model
title: Gemini 2.5 Flash
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.331
output_speed_tps: 206.6435216635
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 52.2, z: 0.26, r: 54.0, estimated: false }  # 전문 지식
  reasoning: { s: 32.8, z: -0.12, r: 48.2, estimated: false }  # 추론
  coding: { s: 20.7, z: -0.69, r: 39.7, estimated: false }  # 코딩
  agentic: { s: 26.3, z: -0.73, r: 39.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 72.8, z: 0.07, r: 51.1, estimated: false }  # 멀티모달
  long_context: { s: 73.7, z: 0.49, r: 57.3, estimated: false }  # 긴문맥
  instruction: { s: 53.6, z: 0.13, r: 52.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Gemini 2.5 Flash

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.331/1M · 206.6435216635 t/s · TTFT 9.01599154241225s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 54.0 | +0.26 | 실측 | [[gpqa-diamond]] 78.9899%×0.4, [[humanitys-last-exam]] 12.1409%×0.3 |
| 추론 | 48.2 | -0.12 | 실측 | [[critpt]] 1.14286%×1.0, [[gpqa-diamond]] 78.9899%×1.0, [[humanitys-last-exam]] 12.1409%×1.0 |
| 코딩 | 39.7 | -0.69 | 실측 | [[terminal-bench]] 13.6364%×0.5 |
| 에이전트 | 39.0 | -0.73 | 실측 | [[tau2-bench]] 31.5789%×1.0, [[terminal-bench]] 13.6364%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 51.1 | +0.07 | 실측 | [[mmmu-pro]] 69.0751%×1.0 |
| 긴문맥 | 57.3 | +0.49 | 실측 | [[aa-lcr]] 65.3333%×1.0 |
| 지시 따르기 | 52.0 | +0.13 | 실측 | [[ifbench]] 50.2721%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
