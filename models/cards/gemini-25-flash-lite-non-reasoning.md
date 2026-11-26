---
type: Model
title: Gemini 2.5 Flash-Lite (non-reasoning)
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.067
output_speed_tps: 306.947300319357
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 26.4, z: -0.99, r: 35.1, estimated: false }  # 전문 지식
  reasoning: { s: 15.7, z: -0.97, r: 35.5, estimated: false }  # 추론
  coding: { s: 3.4, z: -1.27, r: 31.0, estimated: false }  # 코딩
  agentic: { s: 11.3, z: -1.26, r: 31.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 52.7, z: -0.96, r: 35.6, estimated: false }  # 멀티모달
  long_context: { s: 36.1, z: -0.66, r: 40.1, estimated: false }  # 긴문맥
  instruction: { s: 27.2, z: -0.97, r: 35.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Flash-Lite (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Gemini 2.5 Flash-Lite (non-reasoning)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 멀티모달
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.1 · 출력 $0.4 · 혼합 $0.067/1M · 306.947300319357 t/s · TTFT 0.435118946734687s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 35.1 | -0.99 | 실측 | [[gpqa-diamond]] 47.3737%×0.4, [[humanitys-last-exam]] 3.6608%×0.3 |
| 추론 | 35.5 | -0.97 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 47.3737%×1.0, [[humanitys-last-exam]] 3.6608%×1.0 |
| 코딩 | 31.0 | -1.27 | 실측 | [[terminal-bench]] 2.27273%×0.5 |
| 에이전트 | 31.1 | -1.26 | 실측 | [[tau2-bench]] 19.0058%×1.0, [[terminal-bench]] 2.27273%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 35.6 | -0.96 | 실측 | [[mmmu-pro]] 53.9884%×1.0 |
| 긴문맥 | 40.1 | -0.66 | 실측 | [[aa-lcr]] 32%×1.0 |
| 지시 따르기 | 35.5 | -0.97 | 실측 | [[ifbench]] 31.4966%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
