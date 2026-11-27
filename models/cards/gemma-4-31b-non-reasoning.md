---
type: Model
title: Gemma 4 31B (non-reasoning)
creator: Google
license: Open
intelligence_index: None
price_blended_usd_1m: 0.168
output_speed_tps: 44.6823307166169
context_window: 256000
status: current
size_class: Small
params_b: 30.7
is_reasoning: false
radar:
  knowledge: { s: 50.2, z: 0.17, r: 52.5, estimated: false }  # 전문 지식
  reasoning: { s: 30.5, z: -0.23, r: 46.5, estimated: false }  # 추론
  coding: { s: 46.0, z: 0.17, r: 52.5, estimated: false }  # 코딩
  agentic: { s: 42.8, z: -0.15, r: 47.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 74.5, z: 0.16, r: 52.4, estimated: false }  # 멀티모달
  long_context: { s: 52.6, z: -0.16, r: 47.7, estimated: false }  # 긴문맥
  instruction: { s: 58.1, z: 0.32, r: 54.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 31B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Gemma 4 31B (non-reasoning)

Google · Open · Small(30.7B) · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 긴문맥, 추론

## 실용 지표
`입력 $0.15 · 출력 $0.4 · 혼합 $0.168/1M · 44.6823307166169 t/s · TTFT 3.95206590623808s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 52.5 | +0.17 | 실측 | [[gpqa-diamond]] 76.2626%×0.4, [[humanitys-last-exam]] 11.8165%×0.3 |
| 추론 | 46.5 | -0.23 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 76.2626%×1.0, [[humanitys-last-exam]] 11.8165%×1.0 |
| 코딩 | 52.5 | +0.17 | 실측 | [[terminal-bench]] 30.303%×0.5 |
| 에이전트 | 47.7 | -0.15 | 실측 | [[gdpval]] 554.71 Elo×1.0, [[tau2-bench]] 65.4971%×1.0, [[tau3-banking]] 8.86598%×1.0, [[terminal-bench]] 30.303%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 52.4 | +0.16 | 실측 | [[mmmu-pro]] 70.3468%×1.0 |
| 긴문맥 | 47.7 | -0.16 | 실측 | [[aa-lcr]] 46.6667%×1.0 |
| 지시 따르기 | 54.8 | +0.32 | 실측 | [[ifbench]] 53.4694%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
