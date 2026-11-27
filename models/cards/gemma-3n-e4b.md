---
type: Model
title: Gemma 3n E4B
creator: Google
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32000
status: past
size_class: Small
params_b: 8.4
is_reasoning: false
radar:
  knowledge: { s: 15.1, z: -1.54, r: 26.9, estimated: false }  # 전문 지식
  reasoning: { s: 9.2, z: -1.29, r: 30.6, estimated: false }  # 추론
  coding: { s: 3.4, z: -1.27, r: 31.0, estimated: false }  # 코딩
  agentic: { s: 2.8, z: -1.56, r: 26.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 15.7, z: -2.85, r: 7.3, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.77, r: 23.5, estimated: false }  # 긴문맥
  instruction: { s: 22.2, z: -1.18, r: 32.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 3n E4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Gemma 3n E4B

Google · Open · Small(8.4B) · 컨텍스트 32k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 26.9 | -1.54 | 실측 | [[gpqa-diamond]] 29.596%×0.4, [[humanitys-last-exam]] 4.4949%×0.3 |
| 추론 | 30.6 | -1.29 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 29.596%×1.0, [[humanitys-last-exam]] 4.4949%×1.0 |
| 코딩 | 31.0 | -1.27 | 실측 | [[terminal-bench]] 2.27273%×0.5 |
| 에이전트 | 26.6 | -1.56 | 실측 | [[tau2-bench]] 4.97076%×1.0, [[tau3-banking]] 0.206186%×1.0, [[terminal-bench]] 2.27273%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 7.3 | -2.85 | 실측 | [[mmmu-pro]] 26.2428%×1.0 |
| 긴문맥 | 23.5 | -1.77 | 실측 | [[aa-lcr]] 0%×1.0 |
| 지시 따르기 | 32.4 | -1.18 | 실측 | [[ifbench]] 27.8912%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
